import styles from './RestoranIdHero.module.css';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

function PapaJohnsHero({ restaurant }) {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <>
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
                <div className={styles.imageContainer}>
                    <img
                        src={restaurant.data.img_url}
                        alt={restaurant.data.name}
                    />
                </div>
                <div className={styles.description}>
                    <div className={styles.addresContainer}>
                        <span>{restaurant.data.name}</span>
                        <span>{restaurant.data.address}</span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.cuisine}>
                            <span>{t('cuisine')}</span>
                            <span>{restaurant.data.cuisine}</span>
                        </div>
                        <div className={styles.delivery}>
                            <span>${restaurant.data.delivery_price}</span>
                            <span>{t('delivery')}</span>
                        </div>
                        <div className={styles.backBtn}>
                            <button onClick={() => router.back()}>
                                {t('goback')}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default PapaJohnsHero;
