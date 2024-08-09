import styles from './404.module.css';

import { motion } from 'framer-motion';

import notFoundImage from '../../assets/images/404/404.svg';

function NotFound() {
    return (
        <motion.div
            className={styles.container}
            animate={{
                scale: [1, 0.95, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <img src={notFoundImage.src} />
        </motion.div>
    );
}

export default NotFound;
