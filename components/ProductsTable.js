
import styles from '../styles/ProductsTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DeleteProductModal from './DeleteProductModal';
export default function ProductsTable() {
  const products = [
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' },
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' },
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' },
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' },
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' },
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' },
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' }, 
    { id: 1, name: 'Marqarita', price: '$16', image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__' }
    
  ];

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Products</h1>
        <button className={styles.addButton}><FontAwesomeIcon icon={faPlusCircle} /> ADD PRODUCT</button>
      </div>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Papa John's</p>
            <p>{product.price}</p>
            <div className={styles.actions}>
              <button className={styles.editButton}><FontAwesomeIcon icon={faEdit} /></button>
              <button className={styles.deleteButton} onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
          </div>
        ))}
      </div>
      {showDeleteModal && <DeleteProductModal onClose={handleCloseModal} />}
    </div>
  );
}
