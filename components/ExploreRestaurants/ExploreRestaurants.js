import styles from './ExploreRestaurants.module.css';

import Pizza from '../../assets/images/explorerestaurants/pizza.svg';
import Burger from '../../assets/images/explorerestaurants/burger.svg';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ExploreRestaurants() {
    const { t } = useTranslation();
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 70,
            }}
            viewport={{ once: true }}
        >
            <img src={Pizza.src} className={styles.image} />
            <div className={styles.text}>
                <h4>{t('discoveryrest')}</h4>
                <button>{t('explorenow')}</button>
            </div>
            <img src={Burger.src} className={styles.image} />
        </motion.div>
    );
}

export default ExploreRestaurants;
