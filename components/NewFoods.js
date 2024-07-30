import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/NewFoods.module.css';

import chees from '../assets/images/NewFoods/chees.svg';
import pizza from '../assets/images/NewFoods/pizza.svg';
import kfc from '../assets/images/NewFoods/kfc.svg';

const NewFoods = () => {
    return (
        <motion.section
            className={styles.container}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className={styles.titleOne}>Our Popular Foods</h2>
            <h3 className={styles.titleTwo}>New Foods</h3>
            <p className={styles.text}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
            </p>
            <p className={styles.pr2}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
            </p>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img src={chees.src} />
                    <h3>Dubble Chees</h3>
                    <p>
                        Lorem ipsum is placeholder commonly used in the graphic{' '}
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={pizza.src} />
                    <h3>Margarita</h3>
                    <p>
                        Lorem ipsum is placeholder commonly used in the graphic{' '}
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={kfc.src} />
                    <h3>Twister Menu</h3>
                    <p>
                        Lorem ipsum is placeholder commonly used in the graphic{' '}
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default NewFoods;
