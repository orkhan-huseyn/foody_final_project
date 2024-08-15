import React, { useState, useEffect } from 'react';
import styles from './AdminRestaurantsCart.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
const restaurantsData = [
    {
        id: 1,
        name: "Papa John's",
        type: 'Pizza',
        logo: 'https://s3-alpha-sig.figma.com/img/b138/e7ff/811a23c52160b70e9e6dbdc802b5fe89?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DAD3o7v7K4oI42JZRN1gTNjAYXU-B3YR9VmWH-URJoXxlnTZRDkVb4mur1xEwWW5CbjVY2i3y5gEJti8DIA6Bk6AaXqqMsUZwOh5EJyqalC3i0N~aDYUocccZbLd4G9WuJj~fWyVfPt3JFuyFZ4dwRn8UU0ame42a4XWvr~jA0dCSWr9UKsjSpMh~KaBazPt3RtkVwXLhMgw4twEALtd4QHx-lmJsDQsI5sbnpXAmEhRwXcqbzeXCo63ySqEHYHbypfh0nrlMNFRxPI-Dz1Nfhjpe7DDf3ng6Pby1imhVz-iwlqSlEUaC1R29rB4UxgLEFqRfT-Ou-ANiJYgS2L3ng__',
    },
    {
        id: 2,
        name: 'Burger King',
        type: 'Fast Food',
        logo: 'https://s3-alpha-sig.figma.com/img/1e0f/7e1a/a96e84e880784ee6484f8f15ff1a41ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzS7pC5AmK129LKGIbtgw1beELZWoQApwRQy2e08jp2odzNIN2W4XvKo8A02fHzyaPgm1rQmDm4jh97EBX6HvaNeT-krzJhUSALROdPWrW-KhzAJDKf9~9ncaCIbp6QPsR1~TbQPLXtUUFqrQvV~QgSiKIvNZNiWL7F8xgCvqkzO74W-L04Sfzb0rQOaNOsBZZ5E2-Q2d9ngZX5wENGXIY2sCDbgPBuZMKcwvgSGwnf9temsfswaRj4hjQB9CB7Cnj9ojQTT4CbFe~bW7T20eFlWPMqH9iqoTKfyiNrW2P-3eO57JZhnSi5FrgjMsmHaTL7M4Maz-brsDKYP1dlRlQ__',
    },
    {
        id: 3,
        name: "Papa John's",
        type: 'Pizza',
        logo: 'https://s3-alpha-sig.figma.com/img/b138/e7ff/811a23c52160b70e9e6dbdc802b5fe89?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DAD3o7v7K4oI42JZRN1gTNjAYXU-B3YR9VmWH-URJoXxlnTZRDkVb4mur1xEwWW5CbjVY2i3y5gEJti8DIA6Bk6AaXqqMsUZwOh5EJyqalC3i0N~aDYUocccZbLd4G9WuJj~fWyVfPt3JFuyFZ4dwRn8UU0ame42a4XWvr~jA0dCSWr9UKsjSpMh~KaBazPt3RtkVwXLhMgw4twEALtd4QHx-lmJsDQsI5sbnpXAmEhRwXcqbzeXCo63ySqEHYHbypfh0nrlMNFRxPI-Dz1Nfhjpe7DDf3ng6Pby1imhVz-iwlqSlEUaC1R29rB4UxgLEFqRfT-Ou-ANiJYgS2L3ng__',
    },
    {
        id: 4,
        name: 'Burger King',
        type: 'Fast Food',
        logo: 'https://s3-alpha-sig.figma.com/img/1e0f/7e1a/a96e84e880784ee6484f8f15ff1a41ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzS7pC5AmK129LKGIbtgw1beELZWoQApwRQy2e08jp2odzNIN2W4XvKo8A02fHzyaPgm1rQmDm4jh97EBX6HvaNeT-krzJhUSALROdPWrW-KhzAJDKf9~9ncaCIbp6QPsR1~TbQPLXtUUFqrQvV~QgSiKIvNZNiWL7F8xgCvqkzO74W-L04Sfzb0rQOaNOsBZZ5E2-Q2d9ngZX5wENGXIY2sCDbgPBuZMKcwvgSGwnf9temsfswaRj4hjQB9CB7Cnj9ojQTT4CbFe~bW7T20eFlWPMqH9iqoTKfyiNrW2P-3eO57JZhnSi5FrgjMsmHaTL7M4Maz-brsDKYP1dlRlQ__',
    },
    {
        id: 5,
        name: "Papa John's",
        type: 'Pizza',
        logo: 'https://s3-alpha-sig.figma.com/img/1e0f/7e1a/a96e84e880784ee6484f8f15ff1a41ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzS7pC5AmK129LKGIbtgw1beELZWoQApwRQy2e08jp2odzNIN2W4XvKo8A02fHzyaPgm1rQmDm4jh97EBX6HvaNeT-krzJhUSALROdPWrW-KhzAJDKf9~9ncaCIbp6QPsR1~TbQPLXtUUFqrQvV~QgSiKIvNZNiWL7F8xgCvqkzO74W-L04Sfzb0rQOaNOsBZZ5E2-Q2d9ngZX5wENGXIY2sCDbgPBuZMKcwvgSGwnf9temsfswaRj4hjQB9CB7Cnj9ojQTT4CbFe~bW7T20eFlWPMqH9iqoTKfyiNrW2P-3eO57JZhnSi5FrgjMsmHaTL7M4Maz-brsDKYP1dlRlQ__',
    },
    {
        id: 6,
        name: 'Burger King',
        type: 'Fast Food',
        logo: 'https://s3-alpha-sig.figma.com/img/1e0f/7e1a/a96e84e880784ee6484f8f15ff1a41ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzS7pC5AmK129LKGIbtgw1beELZWoQApwRQy2e08jp2odzNIN2W4XvKo8A02fHzyaPgm1rQmDm4jh97EBX6HvaNeT-krzJhUSALROdPWrW-KhzAJDKf9~9ncaCIbp6QPsR1~TbQPLXtUUFqrQvV~QgSiKIvNZNiWL7F8xgCvqkzO74W-L04Sfzb0rQOaNOsBZZ5E2-Q2d9ngZX5wENGXIY2sCDbgPBuZMKcwvgSGwnf9temsfswaRj4hjQB9CB7Cnj9ojQTT4CbFe~bW7T20eFlWPMqH9iqoTKfyiNrW2P-3eO57JZhnSi5FrgjMsmHaTL7M4Maz-brsDKYP1dlRlQ__',
    },
    {
        id: 7,
        name: "Papa John's",
        type: 'Pizza',
        logo: 'https://s3-alpha-sig.figma.com/img/1e0f/7e1a/a96e84e880784ee6484f8f15ff1a41ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzS7pC5AmK129LKGIbtgw1beELZWoQApwRQy2e08jp2odzNIN2W4XvKo8A02fHzyaPgm1rQmDm4jh97EBX6HvaNeT-krzJhUSALROdPWrW-KhzAJDKf9~9ncaCIbp6QPsR1~TbQPLXtUUFqrQvV~QgSiKIvNZNiWL7F8xgCvqkzO74W-L04Sfzb0rQOaNOsBZZ5E2-Q2d9ngZX5wENGXIY2sCDbgPBuZMKcwvgSGwnf9temsfswaRj4hjQB9CB7Cnj9ojQTT4CbFe~bW7T20eFlWPMqH9iqoTKfyiNrW2P-3eO57JZhnSi5FrgjMsmHaTL7M4Maz-brsDKYP1dlRlQ__',
    },
    {
        id: 8,
        name: 'Burger King',
        type: 'Fast Food',
        logo: 'https://s3-alpha-sig.figma.com/img/1e0f/7e1a/a96e84e880784ee6484f8f15ff1a41ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzS7pC5AmK129LKGIbtgw1beELZWoQApwRQy2e08jp2odzNIN2W4XvKo8A02fHzyaPgm1rQmDm4jh97EBX6HvaNeT-krzJhUSALROdPWrW-KhzAJDKf9~9ncaCIbp6QPsR1~TbQPLXtUUFqrQvV~QgSiKIvNZNiWL7F8xgCvqkzO74W-L04Sfzb0rQOaNOsBZZ5E2-Q2d9ngZX5wENGXIY2sCDbgPBuZMKcwvgSGwnf9temsfswaRj4hjQB9CB7Cnj9ojQTT4CbFe~bW7T20eFlWPMqH9iqoTKfyiNrW2P-3eO57JZhnSi5FrgjMsmHaTL7M4Maz-brsDKYP1dlRlQ__',
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
