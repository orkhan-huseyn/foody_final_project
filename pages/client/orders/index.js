import Head from 'next/head';
import UserProfileLayout from 'components/UserProfileLayout/UserProfileLayout';
import Layout from 'components/RootLayout/Layout';
import OrderComponent from 'components/UserOrders/orders'; 

function index() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Orders</title>
            </Head>
            <UserProfileLayout>
                <OrderComponent /> 
            </UserProfileLayout>
        </Layout>
    );
}

export default index;
