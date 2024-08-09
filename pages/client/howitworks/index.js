import Head from 'next/head';

import Layout from '../../../components/RootLayout/Layout';
import HowItWorks from '../../../components/HowItWorks/HowItWorks';

function HowWorks() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>How It Works</title>
            </Head>
            <HowItWorks />
        </Layout>
    );
}

export default HowWorks;
