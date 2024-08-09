import styles from './Hero.module.css';

import Link from 'next/link';

import heroBurger from '../../assets/images/hero/hero-burger.png';
import heroPizza from '../../assets/images/hero/hero-pizza.svg';
import heroFries from '../../assets/images/hero/hero-fries.svg';
import heroCheesBurger from '../../assets/images/hero/hero-cheesburger.svg';

import { motion } from 'framer-motion';
const HeroSection = () => {
    return (
        <section className={styles.heroContainer}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 70,
                }}
                className={styles.heroContent}
            >
                <h1>Our Food site makes it easy to find local food</h1>
                <p>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                </p>

                <div className={styles.heroButtons}>
                    <Link
                        href="/client/register"
                        className={`${styles.heroBtn} ${styles.heroRegisterBtn}`}
                    >
                        Register
                    </Link>
                    <Link
                        href="/client/orders"
                        className={`${styles.heroBtn} ${styles.heroOrderBtn}`}
                    >
                        Order Now
                    </Link>
                </div>
            </motion.div>
            <div className={styles.heroImage}>
                <img src={heroBurger.src} className={styles.heroBurger} />

                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        delay: 0.5,
                    }}
                    className={`${styles.littleImg} ${styles.heroPizza}`}
                >
                    <img src={heroPizza.src} />
                </motion.div>
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        delay: 0.5,
                    }}
                    className={`${styles.littleImg} ${styles.heroFries}`}
                >
                    <img src={heroFries.src} />
                </motion.div>
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        delay: 0.5,
                    }}
                    className={`${styles.littleImg} ${styles.heroCheesBurger}`}
                >
                    <img src={heroCheesBurger.src} />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
