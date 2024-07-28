import React from 'react';
import Image from 'next/image';
import styles from '../styles/Basket.module.css';

const BasketItem = ({ item }) => {
  return (
    <div className={styles.basketItem}>
      <Image src={item.image} alt={item.name} width={50} height={50} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
      </div>
      <div className={styles.quantityControl}>
        <button>+</button>
        <span>2</span>
        <button>-</button>
      </div>
      <div className={styles.deleteItem}>
        <button>🗑️</button>
      </div>
    </div>
  );
};

export default BasketItem;
