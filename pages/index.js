import React from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Features from 'components/Features';
import DeliciousMenu from 'components/DeliciousMenu';
import HomePizzaFries from 'components/HomePizzaFriesSec';
import Layout from 'components/Layout';
import NewFoods from 'components/NewFoods';
import ExploreRestaurants from 'components/ExploreRestaurants';

const Home = () => {
    return (
        <Layout>
            <Head>
                <link
                    rel="icon"
                    href="https://play-lh.googleusercontent.com/YwxUwH-UZ2VmRo1ZXiZ_T4BvgUdq6nfxeieUel_zofPbl9nmH_wFyxOOwwhYhd36F00"
                />
                <title>Foody</title>
            </Head>
            <main>
                <HeroSection />
                <Features />
                <DeliciousMenu />
                <HomePizzaFries />
                <NewFoods />
                <ExploreRestaurants />
            </main>
        </Layout>
    );
};

export default Home;
