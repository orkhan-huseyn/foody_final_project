import styles from '../styles/Login.module.css';

import Link from 'next/link';
import { FaRegEye } from 'react-icons/fa';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

import loginImage from '../assets/images/login/client.png';
import LoginHeader from 'components/LoginHeader';

function Login() {
    const pathname = usePathname();

    console.log(pathname);

    return (
        <>
            <LoginHeader />
            <div className={styles.loginPage}>
                <form className={styles.loginPageBody}>
                    <div className={styles.loginPageMain}>
                        <img src={loginImage.src} />
                    </div>
                    <div className={styles.loginPageLogin}>
                        <div className={styles.loginPageLoginTitle}>
                            <Link href="login">Login</Link>
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

