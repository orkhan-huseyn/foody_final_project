import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/404.module.css';
import Layout from 'components/Layout';

import notFoundImage from '../assets/images/404/404.svg';

const NotFoundPage = () => {
    return (
        <Layout>
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
        </Layout>
    );
};

export default NotFoundPage;
