import Layout from '../../components/RootLayout/Layout';

import Head from 'next/head';

import NotFound from 'components/404/404';

const NotFoundPage = () => {
    return (
        <Layout>
            <Head>
                <link
                    rel="icon"
                    href="https://play-lh.googleusercontent.com/YwxUwH-UZ2VmRo1ZXiZ_T4BvgUdq6nfxeieUel_zofPbl9nmH_wFyxOOwwhYhd36F00"
                />
                <title>Not Found</title>
            </Head>
            <NotFound />
        </Layout>
    );
};

export default NotFoundPage;
