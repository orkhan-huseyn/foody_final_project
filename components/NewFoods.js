import React from 'react';
import styles from '../styles/NewFoods.module.css';

const NewFoods = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.titleOne}>Our Popular Foods</h2>
            <h3 className={styles.titleTwo}>New Foods</h3>
            <p className={styles.text}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
            </p>
            <div className={styles.cardContainer}>
                <div>Card1</div>
                <div>Card1</div>
                <div>Card1</div>
            </div>
        </section>
    );
};

export default NewFoods;
