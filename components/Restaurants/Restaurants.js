import styles from './Restaurants.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../../api';
import logo from '../../assets/images/eacamplogo/eacamp.svg';
import LoadingIcon from '../Loading/Loading';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdFilterList } from 'react-icons/md';

function Restaurants() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRestaurants = async () => {
        try {
            const response = await api.get('/restaurants');
            const result = response.data.result.data;
            setRestaurants(result);
            setFilteredRestaurants(result);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const handleFilter = (filter) => {
        if (filter === 'All') {
            setFilteredRestaurants(restaurants);
        } else {
            const filtered = restaurants.filter((restaurant) =>
                restaurant.name.toLowerCase().includes(filter.toLowerCase())
            );
            setFilteredRestaurants(filtered);
        }
    };

    if (loading) return <LoadingIcon />;

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
                    <button
                        className={styles.menuBarTitle}
                        onClick={() => handleFilter('All')}
                    >
                        <img src={logo.src} />
                        All
                    </button>
                    {restaurants.map((item, index) => (
                        <button
                            key={index}
                            className={styles.menuBarTitle}
                            onClick={() => handleFilter(item.name)}
                        >
                            <img src={item.img_url} alt={item.name} />
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className={styles.restaurants}>
                    {filteredRestaurants.map((restaurant, index) => (
                        <Link
                            key={index}
                            className={styles.card}
                            href={`/client/restaurants/${restaurant.id}`}
                        >
                            <div className={styles.cardImg}>
                                <img
                                    src={restaurant.img_url}
                                    alt={restaurant.name}
                                />
                            </div>
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.cuisine}</p>
                            <div className={styles.price}>
                                <h6>${restaurant.delivery_price}</h6>
                                <h5>{restaurant.delivery_min} min</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
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
                            {restaurants.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.mobileMenuItem}
                                >
                                    <button
                                        onClick={() => handleFilter(item.name)}
                                    >
                                        {item.name}
                                    </button>
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
