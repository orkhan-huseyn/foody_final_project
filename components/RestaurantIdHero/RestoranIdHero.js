import styles from './RestoranIdHero.module.css';

import { motion } from 'framer-motion';

import PapaJohnsLogo from '../../assets/images/restaurant-id/papa-johns-logo.png';

function PapaJohnsHero() {
    return (
        <>
            <motion.div
                className={styles.container}
                // initial={{ opacity: 0, scale: 0.5 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // transition={{
                //   duration: 0.5,
                //   type: "spring",
                //   stiffness: 70,
                // }}
                // viewport={{ once: true }}
            >
                <div className={styles.imageContainer}>
                    <img src={PapaJohnsLogo.src} alt="Papa johns logo" />
                </div>
                <div className={styles.description}>
                    <div className={styles.addresContainer}>
                        <span>Papa John’s Pizza Restaurant</span>
                        <span>19 Nizami street, Sabail, Baku</span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.cuisine}>
                            <span>Cuisine</span>
                            <span>pizza, drink, hotdog, sendvich, roll</span>
                        </div>
                        <div className={styles.delivery}>
                            <span>$5</span>
                            <span>Delivery</span>
                        </div>
                        <div className={styles.backBtn}>
                            <button>Go Back</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default PapaJohnsHero;
