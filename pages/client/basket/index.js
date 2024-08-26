import Head from 'next/head';

import UserProfileLayout from 'components/UserProfileLayout/UserProfileLayout';
import Layout from 'components/RootLayout/Layout';
import ProfileBasket from '../../../components/UserBasket/ProfileBasket';

function Profile() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Basket</title>
            </Head>
            <UserProfileLayout>
                <ProfileBasket />
            </UserProfileLayout>
        </Layout>
    );
}

export default Profile;
