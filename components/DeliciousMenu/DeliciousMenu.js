import styles from './HomeDeliciousMenu.module.css';
import KfcMenu from '../../assets/images/HomeFastFood/menu.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
                <h2>Menu That Always Make You Fall In Love</h2>
                <p className={styles.pr1}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print, and publishing
                    industries for previewing layouts and visual mockups.
                </p>
                <p className={styles.pr2}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                </p>
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
