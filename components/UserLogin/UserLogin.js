import styles from './UserLogin.module.css';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { FaRegEye } from 'react-icons/fa';

import loginImage from '../../assets/images/login/client.png';

function Login() {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.loginPage}>
            <form className={styles.loginPageBody}>
                <div className={styles.loginPageMain}>
                    <img src={loginImage.src} />
                </div>
                <div className={styles.loginPageLogin}>
                    <div className={styles.loginPageLoginTitle}>
                        <Link className={styles.active} href="login">
                            {t('login')}
                        </Link>
                        <Link href="/client/register">{t('register')}</Link>
                    </div>
                    <div className={styles.loginPageLoginInputUser}>
                        <label for="username">{t('username')}</label>
                        <input
                            type="text"
                            id="username"
                            placeholder={t('placeholderusername')}
                        />
                    </div>
                    <div className={styles.loginPageLoginInputPassword}>
                        <label for="password">{t('password')}</label>
                        <div className={styles.inputContainer}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder={t('placeholderpassword')}
                            />
                            <FaRegEye
                                className={styles.faEye}
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                    </div>
                    <div className={styles.loginPageLoginButton}>
                        <button>{t('loginbutton')}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
