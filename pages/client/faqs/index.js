import Head from 'next/head';

import Layout from '../../../components/RootLayout/Layout';
import Faqs from 'components/Faqs/Faqs';

const faqs = () => {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>FAQs</title>
            </Head>
            <Faqs />
        </Layout>
    );
};

export default faqs;
