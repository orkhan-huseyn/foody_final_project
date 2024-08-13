import React, { useState, useEffect } from 'react';
import styles from './AdminRestaurantsCart.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
const restaurantsData = [
    {
        id: 1,
        name: "Papa John's",
        type: 'Pizza',
        logo: '/assets/images/adminrestuarants/papajohns.svg',
    },
    {
        id: 2,
        name: 'Burger King',
        type: 'Fast Food',
        logo: '/assets/images/adminrestuarants/burgerking.svg',
    },
    {
        id: 3,
        name: "Papa John's",
        type: 'Pizza',
        logo: '/assets/images/adminrestuarants/papajohns.svg',
    },
    {
        id: 4,
        name: 'Burger King',
        type: 'Fast Food',
        logo: '/assets/images/adminrestuarants/burgerking.svg',
    },
    {
        id: 5,
        name: "Papa John's",
        type: 'Pizza',
        logo: '/assets/images/adminrestuarants/papajohns.svg',
    },
    {
        id: 6,
        name: 'Burger King',
        type: 'Fast Food',
        logo: '/assets/images/adminrestuarants/burgerking.svg',
    },
    {
        id: 7,
        name: "Papa John's",
        type: 'Pizza',
        logo: '/assets/images/adminrestuarants/papajohns.svg',
    },
    {
        id: 8,
        name: 'Burger King',
        type: 'Fast Food',
        logo: '/assets/images/adminrestuarants/burgerking.svg',
    },
];
function AdminRestaurantsCart() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isResponsive, setIsResponsive] = useState(false);
    const cardsPerPage = 6;
    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 320);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = restaurantsData.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={styles.cardsContainer}>
            {currentCards.map((restaurant) => (
                <div key={restaurant.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Link href="#" legacyBehavior>
                            <a className={styles.deleteIcon}>
                                <FaTrashAlt />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={restaurant.logo} alt={`${restaurant.name} logo`} className={styles.logo} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3>{restaurant.name}</h3>
                        <p>{restaurant.type}</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link href="#" legacyBehavior>
                            <a className={styles.editIcon}>
                                <FaEdit />
                            </a>
                        </Link>
                    </div>
                </div>
            ))}

            {isResponsive && (
                <div className={styles.pagination}>
                    <button
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
                        className={styles.pageButton}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
                    {[...Array(Math.ceil(restaurantsData.length / cardsPerPage))].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() =>
                            paginate(currentPage < Math.ceil(restaurantsData.length / cardsPerPage) ? currentPage + 1 : currentPage)
                        }
                        className={styles.pageButton}
                        disabled={currentPage === Math.ceil(restaurantsData.length / cardsPerPage)}
                    >
                        {'>'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default AdminRestaurantsCart;
