import styles from './AboutUs.module.css';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import largeYellow from '../../assets/images/aboutus/largeyellow.svg';
import smallYellow from '../../assets/images/aboutus/smallyellow.svg';
import hamburger from '../../assets/images/aboutus/hamburger.svg';
import pizza from '../../assets/images/aboutus/pizza.svg';
import soup from '../../assets/images/aboutus/soup.svg';
import coffe from '../../assets/images/aboutus/coffe.svg';

// Animation

const bounceAnimation = {
    initial: { y: 0 },
    animate: { y: [0, 15, 0] },
    transition: { repeat: Infinity, duration: 3, delay: 0 },
};

function AboutUs() {
    const { t } = useTranslation();
    return (
        <motion.div
            className={styles.aboutContainer}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className={styles.aboutText}>
                <h1 className={styles.aboutTitle}>{t('about')}</h1>
                <p className={styles.aboutDescription}>{t('aboutdesclarge')}</p>
                <p className={styles.pr2}>{t('aboutdescsmall')}</p>
            </div>
            <div className={styles.aboutImage}>
                <div className={styles.bigScreenImg}>
                    <img
                        className={styles.background}
                        src={largeYellow.src}
                        alt="yellow background"
                    />

                    <motion.div
                        {...bounceAnimation}
                        className={`${styles.hamburger} ${styles.absoluteImg}`}
                    >
                        <img src={hamburger.src} alt="hamburger" />
                    </motion.div>
                    <motion.div
                        {...bounceAnimation}
                        className={`${styles.pizza} ${styles.absoluteImg}`}
                    >
                        <img src={pizza.src} alt="pizza" />
                    </motion.div>
                    <motion.div
                        {...bounceAnimation}
                        className={`${styles.soup} ${styles.absoluteImg}`}
                    >
                        <img src={soup.src} alt="soup" />
                    </motion.div>
                    <motion.div
                        {...bounceAnimation}
                        className={`${styles.coffe} ${styles.absoluteImg}`}
                    >
                        <img src={coffe.src} alt="coffe" />
                    </motion.div>
                </div>
                <div className={styles.smallScreenImg}>
                    <div>
                        <img
                            className={styles.background}
                            src={smallYellow.src}
                            alt="yellow background"
                        />
                    </div>

                    <img
                        src={hamburger.src}
                        alt="hamburger"
                        className={`${styles.hamburger} ${styles.absoluteImg}`}
                    />

                    <img
                        src={coffe.src}
                        alt="coffe"
                        className={`${styles.coffe} ${styles.absoluteImg}`}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default AboutUs;
