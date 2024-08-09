import Head from 'next/head';

import LoginHeader from '../../../components/LoginHeader/LoginHeader';
import UserRegister from 'components/UserRegister/UserRegister';

function Register() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Register</title>
            </Head>
            <LoginHeader />
            <UserRegister />
        </>
    );
}

export default Register;
