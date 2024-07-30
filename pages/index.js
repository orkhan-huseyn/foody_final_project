import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Features from 'components/Features';
import DeliciousMenu from 'components/DeliciousMenu';

const Home = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <HeroSection />
                <Features />
                <DeliciousMenu />
            </main>
        </>
    );
};

export default Home;
