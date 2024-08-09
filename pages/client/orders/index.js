import Head from 'next/head';

import UserProfileLayout from 'components/UserProfileLayout/UserProfileLayout';
import Layout from 'components/RootLayout/Layout';

function index() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Orders</title>
            </Head>
            <UserProfileLayout></UserProfileLayout>
        </Layout>
    );
}

export default index;
