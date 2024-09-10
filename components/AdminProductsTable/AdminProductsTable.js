import styles from './ProductsTable.module.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';

const AdminProductsTable = () => {
    const [products, setProducts] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedProductImage, setSelectedProductImage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleProductsSubmit = async () => {
        const data = {
            name,
            description,
            img_url: selectedProductImage,
            rest_id: 'fsdgdsgdfgdf',
            price,
        };
        try {
            await axios.put(
                `http://localhost:3000/api/products/${selectedProductId}`,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.log(error.message);
        }
        fetchProducts();
        setShowForm(false);
        resetForm();
    };

    // GET

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/api/products'
            );
            const result = response.data.result.data;
            setProducts(result);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // GET RESTAURANTS

    const fetchRestaurants = async () => {
        const response = await axios.get(
            'http://localhost:3000/api/restaurants'
        );
        const result = response.data.result.data;
        setRestaurants(result);
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);
    // DELETE

    const handleDeleteProducts = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/products/${id}`);
            fetchProducts();
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

    const handleEditProducts = (product) => {
        handleOpenForm();
        setIsEditing(true);
        setSelectedProductId(product.id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setSelectedProductImage(product.img_url);
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setDescription('');
        setSelectedProductImage('');
        setPrice('');
    };

    const headerDetails = {
        headerTitle: 'Products',
        hasActionButton: false,
        hasDropdown: true,
    };

    const ProductsFields = {
        title: isEditing ? 'Edit Products' : 'Add Products',
        informationTitle: isEditing
            ? 'Edit your Products information'
            : 'Add your Products information',
        handleSubmit: handleProductsSubmit,
        submitBtnName: isEditing ? 'Update Product' : 'Create Product',
        selectedImage: selectedProductImage,
        setSelectedImage: setSelectedProductImage,
        handleCancelForm,
        informations: [
            {
                label: 'Name',
                type: 'text',
                value: name,
                id: 'name',
                placeholder: 'Margarita',
                onChange: (e) => setName(e.target.value),
            },
            {
                label: 'Description',
                type: 'textarea',
                value: description,
                id: 'description',
                placeholder: '16.Description food',
                onChange: (e) => setDescription(e.target.value),
            },
            {
                label: 'Price',
                type: 'number',
                value: price,
                id: 'price',
                placeholder: '0',
                onChange: (e) => setPrice(Number(e.target.value)),
            },
            {
                label: 'Restaurants',
                type: 'dropdown',
            },
        ],
    };

    return (
        <>
            <AdminPageHeader
                restaurants={restaurants}
                dropdownOptions={restaurants}
                setRestaurants={setRestaurants}
                headerDetails={headerDetails}
            />

            <div className={styles.productsContainer}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img
                            src={product.img_url}
                            alt={product.name}
                            className={styles.productImage}
                        />
                        <div className={styles.productInfo}>
                            <div>
                                <h3 className={styles.productName}>
                                    {product.name}
                                </h3>
                                <p className={styles.restaurant}>Papa John's</p>
                                <span className={styles.price}>
                                    ${product.price}
                                </span>
                            </div>
                            <div className={styles.icons}>
                                <FaEdit
                                    className={styles.icon}
                                    onClick={() => handleEditProducts(product)}
                                />
                                <FaTrashAlt
                                    className={`${styles.icon} ${styles.deleteIcon}`}
                                    onClick={() =>
                                        handleDeleteProducts(product.id)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showForm && (
                <AdminFormSection
                    handleCloseForm={handleCloseForm}
                    fields={ProductsFields}
                />
            )}
        </>
    );
};

export default AdminProductsTable;
