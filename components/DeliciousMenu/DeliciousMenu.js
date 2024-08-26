import styles from './HomeDeliciousMenu.module.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import KfcMenu from '../../assets/images/HomeFastFood/menu.svg';

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
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    return (
        <motion.section
            ref={ref}
            className={styles.container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <motion.div
                variants={rightVariants}
                className={styles.textContainer}
            >
                <h2>{t('homemenuone')}</h2>
                <p className={styles.pr1}>{t('homemenupr1')}</p>
                <p className={styles.pr2}>{t('homemenupr2')}</p>
            </motion.div>
            <motion.div
                variants={leftVariants}
                className={styles.imageContainer}
            >
                <img src={KfcMenu.src} />
            </motion.div>
        </motion.section>
    );
}

export default DeliciousMenu;
