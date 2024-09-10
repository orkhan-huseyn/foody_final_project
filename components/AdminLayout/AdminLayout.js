import styles from './AdminLayout.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import Languages from 'components/Languages/Languages';
import AdminSidebar from 'components/AdminSidebar/AdminSidebar';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';

import adminprofile from '../../assets/images/adminprofileimage/adminprofile.svg';
import eacamp from '../../assets/images/eacamplogo/eacamp.svg';

import {
    MdDashboard,
    MdCategory,
    MdLocalOffer,
    MdProductionQuantityLimits,
    MdHistory,
} from 'react-icons/md';
import { BsBorderWidth } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { RiMenu2Fill } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa6';

import { FaClipboardList } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function AdminLayout({ children }) {
    const [name, setName] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedProductImage, setSelectedProductImage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [restId, setRestId] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

    console.log(restId);

    const handleProductsSubmit = async () => {
        const data = {
            name,
            description,
            img_url: selectedProductImage,
            rest_id: restId,
            price,
        };

        try {
            //POST REQUEST
            await axios.post('http://localhost:3000/api/products', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.log(error.message);
        }
        setShowForm(false);
        resetForm();
    };

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

    const handleAddProducts = () => {
        handleOpenForm();
        resetForm();
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setDescription('');
        setSelectedProductImage('');
        setPrice('');
    };

    const ProductsFields = {
        title: 'Add Products',
        informationTitle: 'Add your Products information',
        handleSubmit: handleProductsSubmit,
        submitBtnName: 'Create Product',
        selectedImage: selectedProductImage,
        setSelectedImage: setSelectedProductImage,
        dropdownOptions: restaurants,
        setId: setRestId,
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
                placeholder: 'Description food',
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
            <div className={styles.container}>
                <header>
                    <div className={styles.logoContainer}>
                        <RiMenu2Fill
                            className={styles.menuIcon}
                            onClick={() => setShowSidebar(true)}
                        />
                        <Link href="/admin">
                            Foody<span className={styles.dot}>.</span>
                        </Link>
                    </div>

                    <div className={styles.btnContainer}>
                        <button
                            className={styles.addProduct}
                            onClick={() => handleAddProducts()}
                        >
                            {' '}
                            <FaPlus className={styles.plusIcon} />{' '}
                            <span>Add product</span>
                        </button>
                        <div className={styles.languages}>
                            <Languages backgroundColor={'#27283C'} />
                        </div>
                        <button className={styles.adminImage}>
                            <img src={adminprofile.src} />
                        </button>
                    </div>
                </header>

                <main className={styles.mainContainer}>
                    <div className={styles.sidebar}>
                        <Link
                            href="/admin"
                            className={isActive('/admin') ? styles.active : ''}
                        >
                            <MdDashboard className={styles.icon} />
                            Dashboard
                        </Link>
                        <Link
                            href="/admin/products"
                            className={
                                isActive('/admin/products') ? styles.active : ''
                            }
                        >
                            <MdProductionQuantityLimits
                                className={styles.icon}
                            />
                            Products
                        </Link>
                        <Link
                            href="/admin/restaurants"
                            className={
                                isActive('/admin/restaurants')
                                    ? styles.active
                                    : ''
                            }
                        >
                            <FaClipboardList className={styles.icon} />
                            Restaurants
                        </Link>
                        <Link
                            href="/admin/category"
                            className={
                                isActive('/admin/category') ? styles.active : ''
                            }
                        >
                            <MdCategory className={styles.icon} />
                            Category
                        </Link>
                        <Link
                            href="/admin/orders"
                            className={
                                isActive('/admin/orders') ? styles.active : ''
                            }
                        >
                            <BsBorderWidth className={styles.icon} />
                            Orders
                        </Link>
                        <Link
                            href="/admin/history"
                            className={
                                isActive('/admin/history') ? styles.active : ''
                            }
                        >
                            <MdHistory className={styles.icon} />
                            History
                        </Link>
                        <Link
                            href="/admin/offer"
                            className={
                                isActive('/admin/offer') ? styles.active : ''
                            }
                        >
                            <MdLocalOffer className={styles.icon} />
                            Offer
                        </Link>
                        <Link href="/admin">
                            <IoIosLogOut className={styles.icon} />
                            Logout
                        </Link>
                    </div>

                    <div className={styles.content}>{children}</div>
                </main>

                <div className={styles.eacamp}>
                    <img src={eacamp.src} />
                    <span>EACAMP M3</span>
                </div>

                {showSidebar ? (
                    <AdminSidebar
                        setShowSidebar={setShowSidebar}
                        showSidebar={showSidebar}
                    />
                ) : (
                    ''
                )}
            </div>

            {showForm && (
                <AdminFormSection
                    handleCloseForm={handleCloseForm}
                    fields={ProductsFields}
                />
            )}
        </>
    );
}

export default AdminLayout;
