import styles from './UserRegister.module.css';

import register from '../../assets/images/register/register.svg';

import { FaRegEye } from 'react-icons/fa';

import Link from 'next/link';

function UserRegister() {
    return (
        <div className={styles.container}>
            <div className={styles.registerContainer}>
                <div className={styles.imageContainer}>
                    <img src={register.src} />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.linkContainer}>
                        <Link href="/client/login">Login</Link>
                        <Link className={styles.active} href="/client/register">
                            Register
                        </Link>
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
                                type="email"
                                id="email"
                                placeholder="user@mail.ru"
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.inputContainer}>
                                <input
                                    type="password"
                                    id="password"
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
    );
}

export default UserRegister;
