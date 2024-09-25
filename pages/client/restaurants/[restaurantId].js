import Head from 'next/head';

import Layout from '../../../components/RootLayout/Layout';
import RestoranId from '../../../components/Restaurant-ID/RestoranId';
import { useRouter } from 'next/router';

function index() {
    const router = useRouter();
    const restaurant_id = router.query.restaurantId;

    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Restaurant</title>
            </Head>
            <RestoranId id={restaurant_id} />
        </Layout>
    );
}

export default index;
