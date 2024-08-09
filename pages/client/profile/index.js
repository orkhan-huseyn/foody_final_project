import Head from 'next/head';

import UserProfileLayout from 'components/UserProfileLayout/UserProfileLayout';
import Layout from 'components/RootLayout/Layout';
import UserProfile from 'components/UserProfile/UserProfile';

function Profile() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Profile</title>
            </Head>
            <UserProfileLayout>
                <UserProfile />
            </UserProfileLayout>
        </Layout>
    );
}

export default Profile;
