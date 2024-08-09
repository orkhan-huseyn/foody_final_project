import Head from 'next/head';

import LoginHeader from '../../../components/LoginHeader/LoginHeader';
import UserLogin from '../../../components/UserLogin/UserLogin';

function Login() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Login</title>
            </Head>
            <LoginHeader />
            <UserLogin />
        </>
    );
}

export default Login;
