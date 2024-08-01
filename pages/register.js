import styles from '../styles/Register.module.css';
import Link from 'next/link';
import register from '../assets/images/register/register.svg';

import { FaRegEye } from 'react-icons/fa';
import LoginHeader from 'components/LoginHeader';

function Register() {
    return (
        <>
            <LoginHeader />
            <div className={styles.container}>
                <div className={styles.registerContainer}>
                    <div className={styles.imageContainer}>
                        <img src={register.src} />
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.linkContainer}>
                            <Link href="/login">Login</Link>
                            <Link href="/register">Register</Link>
                        </div>
                        {
                            <form className={styles.form}>
                                <div className={styles.formControl}>
                                    <label for="username">Full name</label>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="fullname"
                                    />
                                </div>
                                <div className={styles.formControl}>
                                    <label for="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="username"
                                    />
                                </div>
                                <div className={styles.formControl}>
                                    <label for="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="user@mail.ru"
                                    />
                                </div>
                                <div className={styles.formControl}>
                                    <label for="password">Password</label>
                                    <div className={styles.inputContainer}>
                                        <input type="password" placeholder='password'/>
                                        <FaRegEye className={styles.faEye} />
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button>Register</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
