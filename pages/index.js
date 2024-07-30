import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Features from 'components/Features';
import DeliciousMenu from 'components/DeliciousMenu';
import HomePizzaFries from 'components/HomePizzaFriesSec';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <HeroSection />
                <Features />
                <DeliciousMenu />
                <HomePizzaFries />
            </main>
        </div>
    );
};

export default Home;
