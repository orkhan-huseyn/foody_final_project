import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/404.module.css';
import Layout from 'components/Layout';
import Head from 'next/head';

import notFoundImage from '../assets/images/404/404.svg';

const NotFoundPage = () => {
    return (
        <Layout>
            <Head>
                <link
                    rel="icon"
                    href="https://play-lh.googleusercontent.com/YwxUwH-UZ2VmRo1ZXiZ_T4BvgUdq6nfxeieUel_zofPbl9nmH_wFyxOOwwhYhd36F00"
                />
                <title>Not Found</title>
            </Head>
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
