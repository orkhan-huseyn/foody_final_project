import Head from 'next/head';

import Layout from '../../../components/RootLayout/Layout';
import RestoranId from '../../../components/Restaurant-ID/RestoranId';

function index() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Restaurant</title>
            </Head>
            <RestoranId />
        </Layout>
    );
}

export default index;
