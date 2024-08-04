import styles from '../styles/Login.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { FaRegEye } from 'react-icons/fa';

import loginImage from '../assets/images/login/client.png';
import LoginHeader from 'components/LoginHeader';

function Login() {
    const router = useRouter();

    return (
        <>
            <LoginHeader />
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.loginPage}>
                <form className={styles.loginPageBody}>
                    <div className={styles.loginPageMain}>
                        <img src={loginImage.src} />
                    </div>
                    <div className={styles.loginPageLogin}>
                        <div className={styles.loginPageLoginTitle}>
                            <Link
                                href="login"
                                className={
                                    router.pathname === '/login'
                                        ? styles.active
                                        : ''
                                }
                            >
                                Login
                            </Link>
                            <Link href="register">Register</Link>
                        </div>
                        <div className={styles.loginPageLoginInputUser}>
                            <label for="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="username"
                            />
                        </div>
                        <div className={styles.loginPageLoginInputPassword}>
                            <label for="password">Password</label>
                            <div className={styles.inputContainer}>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="password"
                                />
                                <FaRegEye className={styles.faEye} />
                            </div>
                        </div>
                        <div className={styles.loginPageLoginButton}>
                            <button>Log in</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;

/*! icon elave et */
