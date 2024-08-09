import styles from './Features.module.css';

import { motion } from 'framer-motion';

import cardOne from '../../assets/images/features/card1.svg';
import cardTwo from '../../assets/images/features/card2.svg';
import cardThree from '../../assets/images/features/card3.svg';

const Features = () => {
    return (
        <motion.section
            className={styles.features}
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <h2 className={styles.title}>Features</h2>
            <p className={styles.text}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
            </p>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img src={cardOne.src} alt="Discount Boucher" />
                    <h3>Discount Boucher</h3>
                    <p>
                        Lorem ipsum is placeholder commonly used in the graphic{' '}
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={cardTwo.src} alt="Fresh healthy Food" />
                    <h3>Fresh healthy Food</h3>
                    <p>
                        Lorem ipsum is placeholder commonly used in the graphic{' '}
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={cardThree.src} alt="Fast Home Delivery" />
                    <h3>Fast Home Delivery</h3>
                    <p>
                        Lorem ipsum is placeholder commonly used in the graphic{' '}
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Features;
