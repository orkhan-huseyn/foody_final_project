import styles from '../styles/ExploreRestaurants.module.css';

import Pizza from '../assets/images/explorerestaurants/pizza.svg';
import Burger from '../assets/images/explorerestaurants/burger.svg';

import { motion } from 'framer-motion';

function ExploreRestaurants() {
    return (
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
            <img src={Pizza.src} className={styles.image} />
            <div className={styles.text}>
                <h4>Discover Restaurants Near From you</h4>
                <button>Explore now</button>
            </div>
            <img src={Burger.src} className={styles.image} />
        </motion.div>
    );
}

export default ExploreRestaurants;
