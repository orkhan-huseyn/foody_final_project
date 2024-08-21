import Head from 'next/head';

import UserProfileLayout from 'components/UserProfileLayout/UserProfileLayout';
import Layout from 'components/RootLayout/Layout';
import ProfileBasket from '../../../components/ProfileBasket/ProfileBasket';
import CheckoutOrders from 'components/CheckoutOrders/CheckoutOrders';

function Profile() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Basket</title>
            </Head>
            <UserProfileLayout>
                <ProfileBasket />
                <CheckoutOrders />
            </UserProfileLayout>
        </Layout>
    );
}

export default Profile;
