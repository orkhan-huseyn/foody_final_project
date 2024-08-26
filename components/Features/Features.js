import styles from './Features.module.css';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import cardOne from '../../assets/images/features/card1.svg';
import cardTwo from '../../assets/images/features/card2.svg';
import cardThree from '../../assets/images/features/card3.svg';

const Features = () => {
    const { t } = useTranslation();
    return (
        <motion.section
            className={styles.features}
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <h2 className={styles.title}>{t('features')}</h2>
            <p className={styles.text}>{t('featuresdesc')}</p>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img src={cardOne.src} alt="Discount Boucher" />
                    <h3>{t('discountvoucher')}</h3>
                    <p>{t('featurescarddesc')}</p>
                </div>
                <div className={styles.card}>
                    <img src={cardTwo.src} alt="Fresh healthy Food" />
                    <h3>{t('freshfood')}</h3>
                    <p>{t('featurescarddesc')} </p>
                </div>
                <div className={styles.card}>
                    <img src={cardThree.src} alt="Fast Home Delivery" />
                    <h3>{t('delivery')}</h3>
                    <p>{t('featurescarddesc')} </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Features;
