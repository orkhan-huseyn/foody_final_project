import Layout from '../../../components/RootLayout/Layout';

import Head from 'next/head';

import AboutUs from 'components/About-Us/AboutUs';

// Animation

const bounceAnimation = {
    initial: { y: 0 },
    animate: { y: [0, 15, 0] },
    transition: { repeat: Infinity, duration: 3, delay: 0 },
};

function About() {
    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>About Us</title>
            </Head>
            <AboutUs />
        </Layout>
    );
}

export default About;
