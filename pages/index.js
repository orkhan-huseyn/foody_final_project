import HeroSection from '../components/HeroSection/HeroSection';
import Features from '../components/Features/Features';
import DeliciousMenu from '../components/DeliciousMenu/DeliciousMenu';
import HomePizzaFries from '../components/HomePizzaFriesSec/HomePizzaFriesSec';
import Layout from '../components/RootLayout/Layout';
import NewFoods from '../components/NewFoods/NewFoods';
import ExploreRestaurants from '../components/ExploreRestaurants/ExploreRestaurants';

import Head from 'next/head';

const Home = () => {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Home</title>
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
