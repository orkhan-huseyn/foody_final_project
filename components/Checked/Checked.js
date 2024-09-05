import { useState } from 'react';
import styles from './Checked.module.css';

import { useTranslation } from 'react-i18next';

import checked from '../../assets/images/checkout/checked.svg';
import React from 'react';

const Checked = () => {
    const [isOrderReceived, setIsOrderReceived] = useState(false);

    const handleCheckoutClick = () => {
        setIsOrderReceived(true);
    };

    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            {isOrderReceived ? (
                <div className={styles.checkedContainer}>
                    <div className={styles.image}>
                        <img src={checked.src} alt="checked icon" />
                    </div>
                    <div className={styles.checkedTitle}>
                        <h2>{t('checkedtext')}</h2>
                    </div>
                </div>
            ) : (
                <div className={styles.checkoutSection}>
                    <h2 className={styles.title}>Checkout</h2>
                    <div className={styles.inputGroup}>
                        <label htmlFor="address">Delivery Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Ataturk 45 Ganclik Baku"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="contact">Contact Number</label>
                        <input type="text" id="contact" placeholder="+994" />
                    </div>
                    <div className={styles.paymentMethod}>
                        <p>Payment Method</p>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="door"
                                    defaultChecked
                                />
                                <span className={styles.radioText}>
                                    pay at the door
                                </span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="creditCard"
                                />
                                <span className={styles.radioText}>
                                    pay at the door by credit card
                                </span>
                            </label>
                        </div>
                    </div>
                    <button
                        className={styles.checkoutButton}
                        onClick={handleCheckoutClick}
                    >
                        Checkout
                    </button>
                </div>
            )}

            {!isOrderReceived && (
                <div className={styles.orderSection}>
                    <h3 className={styles.orderTitle}>Your Order</h3>
                    <ul className={styles.orderList}>
                        <li className={styles.orderItem}>
                            <span>1 x Papa John’s Pizza Restaurant</span>
                            <span className={styles.price}>$8.00</span>
                        </li>
                        <li className={styles.orderItem}>
                            <span>2 x Papa Coffee</span>
                            <span className={styles.price}>$6.00</span>
                        </li>
                        <li className={styles.orderItem}>
                            <span>2 x Coca Cola</span>
                            <span className={styles.price}>$3.80</span>
                        </li>
                        <li className={styles.orderItem}>
                            <span>2 x Papa Coffee</span>
                            <span className={styles.price}>$6.00</span>
                        </li>
                        <li className={styles.orderItem}>
                            <span>1 x Papa John’s Pizza Restaurant</span>
                            <span className={styles.price}>$8.00</span>
                        </li>
                    </ul>
                    <div className={styles.total}>
                        <p>Total</p>
                        <span className={styles.totalAmount}>$17.80</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checked;
