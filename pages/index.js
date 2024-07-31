import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Features from 'components/Features';
import DeliciousMenu from 'components/DeliciousMenu';
import HomePizzaFries from 'components/HomePizzaFriesSec';
import Layout from 'components/Layout';
import NewFoods from 'components/NewFoods';

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
                <HomePizzaFries />
                <NewFoods />
            </main>
        </Layout>
    );
};

export default Home;
