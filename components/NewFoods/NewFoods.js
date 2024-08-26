import styles from './NewFoods.module.css';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import chees from '../../assets/images/NewFoods/chees.svg';
import pizza from '../../assets/images/NewFoods/pizza.svg';
import kfc from '../../assets/images/NewFoods/kfc.svg';

const NewFoods = () => {
    const { t } = useTranslation();
    return (
        <motion.section
            className={styles.container}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className={styles.titleOne}>{t('ourpopularfoods')}</h2>
            <h3 className={styles.titleTwo}>{t('newfoods')}</h3>
            <p className={styles.text}>{t('newfoodspr')}</p>
            <p className={styles.pr2}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
            </p>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img src={chees.src} />
                    <h3>{t('dubblechees')}</h3>
                    <p>{t('menudesc')}</p>
                </div>
                <div className={styles.card}>
                    <img src={pizza.src} />
                    <h3>Margarita</h3>
                    <p>{t('menudesc')}</p>
                </div>
                <div className={styles.card}>
                    <img src={kfc.src} />
                    <h3>Twister Menu</h3>
                    <p>{t('menudesc')}</p>
                </div>
            </div>
        </motion.section>
    );
};

export default NewFoods;
