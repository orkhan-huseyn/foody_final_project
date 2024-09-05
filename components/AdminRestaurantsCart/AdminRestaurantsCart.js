import styles from './AdminRestaurantsCart.module.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function AdminRestaurantsCart() {
    const [restaurants, setRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [deliveryPrice, setDeliveryPrice] = useState('');
    const [deliveryMin, setDeliveryMin] = useState('');
    const [address, setAddress] = useState('');
    const [selectedRestaurantsImage, setSelectedRestaurantsImage] =
        useState('');
    const [categoryId, setCategoryId] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

    // Requests

    const handleRestaurantsSubmit = async () => {
        const data = {
            name,
            category_id: categoryId,
            img_url: selectedRestaurantsImage,
            cuisine,
            address,
            delivery_min: deliveryMin,
            delivery_price: deliveryPrice,
            categoryName: 'burger',
        };
        try {
            if (isEditing) {
                //PUT REQUEST
                await axios.put(
                    `http://localhost:3000/api/restaurants/${selectedRestaurantId}`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
            } else {
                //POST REQUEST
                await axios.post(
                    'http://localhost:3000/api/restaurants',
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
            }
        } catch (error) {
            console.log(error.message);
        }
        fetchRestaurants();
        setShowForm(false);
        resetForm();
    };

    // GET

    const fetchRestaurants = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/api/restaurants'
            );
            const result = response.data.result.data;
            setRestaurants(result);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    // CATEGORIES DATA

    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/api/category'
            );
            const result = response.data.result.data;
            setCategories(result);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // DELETE

    const handleDeleteRestaurants = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/restaurants/${id}`);
            fetchRestaurants();
        } catch (error) {
            console.log(error.message);
        }
    };

    // Toggle form component

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        resetForm();
    };

    const handleAddRestaurants = () => {
        setIsEditing(false);
        handleOpenForm();
        resetForm();
    };

    const handleEditRestaurants = (restaurant) => {
        handleOpenForm();
        setIsEditing(true);
        setSelectedRestaurantId(restaurant.id);
        setName(restaurant.name);
        setCuisine(restaurant.cuisine);
        setAddress(restaurant.address);
        setDeliveryPrice(restaurant.delivery_price);
        setDeliveryMin(restaurant.delivery_min);
        setSelectedRestaurantsImage(restaurant.img_url);
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setCuisine('');
        setSelectedRestaurantsImage('');
        setDeliveryPrice('');
        setDeliveryMin('');
        setAddress('');
        setCategoryId('');
    };

    //  Create restaurants header

    const headerDetails = {
        headerTitle: 'Restaurants',
        hasActionButton: true,
        actionButtonName: 'Add restaurant',
        hasDropdown: true,
    };

    // ADD/EDIT FORM DETAILS

    const RestaurantsFields = {
        title: isEditing ? 'Edit Restaurants' : 'Add Restaurants',
        informationTitle: isEditing
            ? 'Edit your Restaurants information'
            : 'Add your Restaurants information',
        handleSubmit: handleRestaurantsSubmit,
        submitBtnName: isEditing ? 'Update Restaurant' : 'Create Restaurant',
        selectedImage: selectedRestaurantsImage,
        setSelectedImage: setSelectedRestaurantsImage,
        dropdownOptions: categories,
        setId: setCategoryId,
        handleCancelForm,
        informations: [
            {
                label: 'Name',
                type: 'text',
                value: name,
                id: 'name',
                placeholder: 'Mc Donald`s',
                onChange: (e) => setName(e.target.value),
            },
            {
                label: 'Cuisine',
                type: 'textarea',
                value: cuisine,
                id: 'cuisine',
                placeholder: 'Fast Food , Drink, Ice Cream, Sea Food',
                onChange: (e) => setCuisine(e.target.value),
            },
            {
                label: 'Delivery Price $',
                type: 'number',
                value: deliveryPrice,
                id: 'deliveryPrice',
                placeholder: '0',
                onChange: (e) => setDeliveryPrice(Number(e.target.value)),
            },
            {
                label: 'Delivery Min',
                type: 'number',
                value: deliveryMin,
                id: 'deliveryMin',
                placeholder: '0',
                onChange: (e) => setDeliveryMin(Number(e.target.value)),
            },
            {
                label: 'Address',
                type: 'text',
                value: address,
                id: 'address',
                placeholder: 'Nizami street 45. Baku, Azerbaijan.',
                onChange: (e) => setAddress(e.target.value),
            },
            {
                label: 'Category',
                type: 'dropdown',
            },
        ],
    };

    return (
        <>
            <AdminPageHeader
                restaurants={restaurants}
                setRestaurants={setRestaurants}
                dropdownOptions={categories}
                headerDetails={headerDetails}
                handleAdd={handleAddRestaurants}
            />
            <div className={styles.cardsContainer}>
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <FaTrashAlt
                                onClick={() =>
                                    handleDeleteRestaurants(restaurant.id)
                                }
                                className={styles.deleteIcon}
                            />
                        </div>
                        <div className={styles.logoContainer}>
                            <img
                                src={restaurant.img_url}
                                alt={`${restaurant.name} logo`}
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.name.toLowerCase()}</p>
                        </div>
                        <div className={styles.cardFooter}>
                            <FaEdit
                                onClick={() =>
                                    handleEditRestaurants(restaurant)
                                }
                                className={styles.editIcon}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <AdminFormSection
                    handleCloseForm={handleCloseForm}
                    fields={RestaurantsFields}
                />
            )}
        </>
    );
}

export default AdminRestaurantsCart;
