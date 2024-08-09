import React from 'react';
import styles from './EditProduct.module.css';

const EditProduct = ({ product, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Edit Product</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditProduct;
