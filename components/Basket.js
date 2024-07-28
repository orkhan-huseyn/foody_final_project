import React from 'react';
import BasketItem from './BasketItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket, faList, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Basket.module.css';

const Basket = () => {
  const items = [
    { id: 1, name: "Papa John's Pizza Restaurant", price: 15.80, image: '/assets/images/baskets/pizzaa.jpg' },
    { id: 2, name: 'Cheeseburger', price: 15.80, image: '/assets/images/baskets/cheeseburger.png' },
    { id: 3, name: 'Papa Coffee', price: 15.80, image: '/assets/images/baskets/coffee.png' },
    
  ];

  return (
    <div className={styles.basketContainer}>
      <div className={styles.sidebar}>
        <a className={styles.fa}><FontAwesomeIcon icon={faUser} /> Profile</a>
        <a className={styles.shop}>   <FontAwesomeIcon icon={faShoppingBasket} /> Your Basket</a>
        <a className={styles.fa}><FontAwesomeIcon icon={faList} /> Your Orders</a>
        <a className={styles.fa}><FontAwesomeIcon icon={faCreditCard} /> Checkout</a>
        <a className={styles.fa}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
      </div>
      <div className={styles.basket}>
        <h2>Your Basket</h2>
        <div className={styles.itemsCount}>
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span>3 items</span>
        </div>
        {items.map(item => (
          <BasketItem key={item.id} item={item} />
        ))}
        <div className={styles.checkout}>
          <span>Checkout</span>
          <button disabled>$37.40</button >
        </div>
      </div>
    </div>
  );
};

export default Basket;