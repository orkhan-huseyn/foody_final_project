import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Features from 'components/Features';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <HeroSection />
                <Features />
            </main>
        </div>
    );
};

export default Home;
