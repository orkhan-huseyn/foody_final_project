import Head from 'next/head';

import UserProfileLayout from '../../../components/UserProfileLayout/UserProfileLayout';
import Layout from '../../../components/RootLayout/Layout';
import Checked from '../../../components/Checked/Checked';

function Checkout() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Checkout</title>
            </Head>
            <UserProfileLayout>
                <Checked />
            </UserProfileLayout>
        </Layout>
    );
}

export default Checkout;
