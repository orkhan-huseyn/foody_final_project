import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Features from 'components/Features';
import DeliciousMenu from 'components/DeliciousMenu';
import Layout from 'components/Layout';

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <HeroSection />
                <Features />
                <DeliciousMenu />
            </main>
        </Layout>
    );
};

export default Home;
