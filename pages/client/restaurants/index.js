import Head from 'next/head';

import Layout from 'components/RootLayout/Layout';
import Restaurants from 'components/Restaurants/Restaurants';

function RestaurantsPage() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Restaurants</title>
            </Head>
            <Restaurants />
        </Layout>
    );
}

export default RestaurantsPage;
