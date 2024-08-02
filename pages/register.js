import styles from '../styles/Register.module.css';
import Link from 'next/link';
import register from '../assets/images/register/register.svg';

import { FaRegEye } from 'react-icons/fa';
import LoginHeader from 'components/LoginHeader';
import Head from 'next/head';

function Register() {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="https://play-lh.googleusercontent.com/YwxUwH-UZ2VmRo1ZXiZ_T4BvgUdq6nfxeieUel_zofPbl9nmH_wFyxOOwwhYhd36F00"
                />
                <title>Register</title>
            </Head>
            <LoginHeader />
            <div className={styles.container}>
                <div className={styles.registerContainer}>
                    <div className={styles.imageContainer}>
                        <img src={register.src} />
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.linkContainer}>
                            <Link href="/login">Login</Link>
                            <Link className='active' href="/register">Register</Link>
                        </div>
                        <form className={styles.form}>
                            <div className={styles.formControl}>
                                <label htmlFor="fullname">Full name</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    placeholder="fullname"
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="username"
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="user@mail.ru"
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="password">Password</label>
                                <div className={styles.inputContainer}>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="password"
                                    />
                                    <FaRegEye className={styles.faEye} />
                                </div>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
