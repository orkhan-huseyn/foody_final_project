import styles from '../DeliciousMenu/HomeDeliciousMenu.module.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import pizza from '../../assets/images/HomeFastFood/pizza.svg';
import fries from '../../assets/images/HomeFastFood/fries.svg';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const rightVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { duration: 0.5 } },
};

const leftVariants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 0.5 } },
};

function DeliciousMenu() {
    const [firstRef, firstInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [secondRef, secondInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    return (
        <>
            <motion.section
                className={styles.container}
                ref={firstRef}
                initial="hidden"
                animate={firstInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <motion.div
                    variants={rightVariants}
                    className={styles.imageContainer}
                    style={{ textAlign: 'left' }}
                >
                    <img src={pizza.src} />
                </motion.div>
                <motion.div
                    variants={leftVariants}
                    className={`${styles.textContainer} ${styles.pizzaSec}`}
                >
                    <h2>{t('homemenutwo')}</h2>
                    <p className={styles.pr1}>{t('homemenupr1')}</p>
                    <p className={styles.pr2}>{t('homemenupr2')}</p>
                </motion.div>
            </motion.section>

            <motion.section
                ref={secondRef}
                className={styles.container}
                initial="hidden"
                animate={secondInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <motion.div
                    variants={rightVariants}
                    className={styles.textContainer}
                >
                    <h2>{t('homemenuthree')}</h2>
                    <p className={styles.pr1}>{t('homemenupr1')}</p>
                    <p className={styles.pr2}>{t('homemenupr2')}</p>
                </motion.div>
                <motion.div
                    variants={leftVariants}
                    className={styles.imageContainer}
                    style={{ textAlign: 'right' }}
                >
                    <img src={fries.src} />
                </motion.div>
            </motion.section>
        </>
    );
}

export default DeliciousMenu;
