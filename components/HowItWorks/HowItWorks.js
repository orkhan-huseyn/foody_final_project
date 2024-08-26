import styles from './HowItWorks.module.css';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import LargeYellow from '../../assets/images/howitworks/largesvg1.svg';
import LargeDelivery from '../../assets/images/howitworks/largesvg2.svg';
import SmallYellow from '../../assets/images/howitworks/smallsvg1.svg';
import SmallDelivery from '../../assets/images/howitworks/largesvg2.svg';

function HowItWorks() {
    const { t } = useTranslation();
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 70,
            }}
        >
            <div className={styles.howItWorksTitle}>
                <h1>{t('howitworks')}</h1>
            </div>

            <div className={styles.paragraph}>
                <p>{t('howitworksdesc')}</p>
            </div>

            <div className={styles.imageContainerLarge}>
                <img src={LargeYellow.src} alt="yellow background" />
                <img src={LargeDelivery.src} alt="delivery car" />
            </div>

            <div className={styles.imageContainerSmall}>
                <img src={SmallYellow.src} alt="yellow background" />
                <img src={SmallDelivery.src} alt="delivery car" />
            </div>
        </motion.div>
    );
}

export default HowItWorks;
