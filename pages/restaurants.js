import styles from '../styles/Restaurants.module.css';
import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import burgerKing from '../assets/images/restaurants/burgerking.png';
import cofeeMania from '../assets/images/restaurants/cofeemania.jpeg';
import papaJones from '../assets/images/restaurants/papajones.jpeg';
import pizza from '../assets/images/restaurants/pizza.jpeg';

const menuBarItems = [
    { src: pizza, label: 'Chinese' },
    { src: pizza, label: 'Sea Food' },
    { src: pizza, label: 'Fast Food' },
    { src: pizza, label: 'Pizza' },
    { src: pizza, label: 'Indian' },
    { src: pizza, label: 'Kebab' },
    { src: pizza, label: 'Chinese' },
    { src: pizza, label: 'Sea Food' },
    { src: pizza, label: 'Fast Food' },
    { src: pizza, label: 'Pizza' },
    { src: pizza, label: 'Indian' },
    { src: pizza, label: 'Kebab' },
    { src: pizza, label: 'Chinese' },
    { src: pizza, label: 'Sea Food' },
    { src: pizza, label: 'Fast Food' },
    { src: pizza, label: 'Pizza' },
    { src: pizza, label: 'Indian' },
    { src: pizza, label: 'Kebab' },
    { src: pizza, label: 'Chinese' },
    { src: pizza, label: 'Sea Food' },
    { src: pizza, label: 'Fast Food' },
    { src: pizza, label: 'Pizza' },
    { src: pizza, label: 'Indian' },
    { src: pizza, label: 'Kebab' },
];

const restaurants = [
    {
        src: cofeeMania.src,
        name: 'Coffee Mania',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: burgerKing.src,
        name: 'Burger King',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$1 Delivery',
        time: '30 Min',
    },
    {
        src: pizza.src,
        name: 'Anadolu Restaurant',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: papaJones.src,
        name: "Papa John's",
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: cofeeMania.src,
        name: 'Coffee Mania',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: burgerKing.src,
        name: 'Burger King',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$1 Delivery',
        time: '30 Min',
    },
    {
        src: pizza.src,
        name: 'Anadolu Restaurant',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: papaJones.src,
        name: "Papa John's",
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
];

function Restaurants() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <button onClick={() => setMobileOpen(true)} className={styles.navBar}>
                <BiMenuAltLeft className={styles.navBarIcon} /> <h3>Filters</h3>
            </button>
            <div className={styles.container}>
                <div className={styles.menuBar}>
                    {menuBarItems.map((item, index) => (
                        <div key={index} className={styles.menuBarTitle}>
                            <img src={item.src.src} alt={item.label} />
                            <a href="#">{item.label}</a>
                        </div>
                    ))}
                </div>
                <div className={styles.menu}>
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className={styles.menuItem}>
                            <div className={styles.menuItemName}>
                                <div className={styles.menuItemNameImg}>
                                    <img
                                        src={restaurant.src}
                                        alt={restaurant.name}
                                    />
                                </div>
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.description}</p>
                            </div>
                            <div className={styles.menuItemPrice}>
                                <h6>{restaurant.delivery}</h6>
                                <h5>{restaurant.time}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {mobileOpen ? (
                <div className={styles.mobileMenuOverlay}>
                    <div className={styles.mobileMenu}>
                        <button onClick={() => setMobileOpen(false)} className={styles.closeIconMain}>
                            <IoIosCloseCircleOutline
                                className={styles.closeIcon}
                            />
                        </button>
                        <div className={styles.mobileMenuItems}>
                            {menuBarItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.mobileMenuItem}
                                >
                                    <a href="#">{item.label}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Restaurants;
