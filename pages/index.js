import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <HeroSection />
            </main>
        </div>
    );
};

export default Home;
