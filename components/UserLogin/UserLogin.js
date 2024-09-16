import styles from './UserLogin.module.css';

import api from '../../api';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { FaRegEye } from 'react-icons/fa';
import Notification from '../Notification/Notification';

import loginImage from '../../assets/images/login/client.png';

function Login() {
    const { t } = useTranslation();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            const response = await api.post('/auth/signin', data);
            const token = response.data.user.access_token;
            localStorage.setItem('token', token);
            router.push('/');
        } catch (error) {
            setShow(true);
        }
        resetForm();
        setTimeout(() => {
            setShow(false);
        }, 3000);
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.loginPage}>
            <form className={styles.loginPageBody} onSubmit={handleSubmit}>
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
                        <label for="username">{t('email')}</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            id="username"
                            placeholder={t('emailplaceholder')}
                        />
                    </div>
                    <div className={styles.loginPageLoginInputPassword}>
                        <label for="password">{t('password')}</label>
                        <div className={styles.inputContainer}>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        <button type="submit">{t('loginbutton')}</button>
                    </div>
                </div>
            </form>
            <Notification
                message="Şifrə və ya email yanlışdır..."
                color="red"
                show={show}
            />
        </div>
    );
}

export default Login;
