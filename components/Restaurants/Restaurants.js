import styles from './Restaurants.module.css';

import Link from 'next/link';
import { useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdFilterList } from 'react-icons/md';

import pizza from '../../assets/images/baskets/pizza.svg';

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
        src: pizza.src,
        name: 'Coffee Mania',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: pizza.src,
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
        src: pizza.src,
        name: "Papa John's",
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: pizza.src,
        name: 'Coffee Mania',
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
    {
        src: pizza.src,
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
        src: pizza.src,
        name: "Papa John's",
        description: 'chinese, sea-food, thai, lebanese, caribbean',
        delivery: '$5 Delivery',
        time: '09 Min',
    },
];

function Restaurants() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className={styles.restaurantsContainer}>
            <button
                onClick={() => setMobileOpen(true)}
                className={styles.navbar}
            >
                <MdFilterList className={styles.navbarIcon} />
                <h3>Filters</h3>
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
                <div className={styles.restaurants}>
                    {restaurants.map((restaurant, index) => (
                        <Link
                            key={index}
                            className={styles.card}
                            href="/client/restaurant-id"
                        >
                            <div className={styles.cardImg}>
                                <img
                                    src={restaurant.src}
                                    alt={restaurant.name}
                                />
                            </div>
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.description}</p>
                            <div className={styles.price}>
                                <h6>{restaurant.delivery}</h6>
                                <h5>{restaurant.time}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {mobileOpen ? (
                <div className={styles.mobileMenuOverlay}>
                    <div className={styles.mobileMenu}>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className={styles.closeIconMain}
                        >
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
        </div>
    );
}

export default Restaurants;
