import React, { useState } from 'react';
import styles from './ProductsTable.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
const AdminProductsTable = () => {
    const products = [
        {
            id: 1,
            name: 'Marqarita',
            price: '$16',
            restaurant: "Papa John's",
            image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__', 
        },
    
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const currentItems = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };
    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div className={styles.productsContainer}>
            {currentItems.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <div className={styles.productInfo}>
                        <div>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.restaurant}>{product.restaurant}</p>
                            <span className={styles.price}>{product.price}</span>
                        </div>
                        <div className={styles.icons}>
                            <FaEdit className={styles.icon} />
                            <FaTrashAlt className={`${styles.icon} ${styles.deleteIcon}`} />
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles.paginationContainer}>
                <button
                    className={`${styles.paginationButton} ${currentPage === 1 && styles.disabled}`}
                    onClick={handlePreviousPage}
                >
                    &#8249;
                </button>
                <span className={styles.paginationButton}>{currentPage}</span>
                <button
                    className={`${styles.paginationButton} ${currentPage === totalPages && styles.disabled}`}
                    onClick={handleNextPage}
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default AdminProductsTable;
