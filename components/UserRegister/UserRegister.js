import styles from './UserRegister.module.css';

import { useRouter } from 'next/router';
import register from '../../assets/images/register/register.svg';
import Notification from '../Notification/Notification';

import { FaRegEye } from 'react-icons/fa';
import api from '../../api';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function UserRegister() {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            fullname,
            username,
            email,
            password,
        };

        try {
            await api.post('/auth/signup', data);
            setMessage('Registration successfully!');
            setColor('green');
            router.push('/client/login');
        } catch (error) {
            setMessage('Registration failed!');
            setColor('red');
            console.log(error);
        }

        setShow(true);
        resetForm();

        setTimeout(() => {
            setShow(false);
        }, 3000);
    };

    const resetForm = () => {
        setFullname('');
        setUsername('');
        setPassword('');
        setEmail('');
    };

    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.registerContainer}>
                <div className={styles.imageContainer}>
                    <img src={register.src} />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.linkContainer}>
                        <Link href="/client/login">{t('login')}</Link>
                        <Link className={styles.active} href="/client/register">
                            {t('register')}
                        </Link>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formControl}>
                            <label htmlFor="fullname">{t('fullname')}</label>
                            <input
                                onChange={(e) => setFullname(e.target.value)}
                                value={fullname}
                                type="text"
                                id="fullname"
                                placeholder={t('fullnameplaceholder')}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="username">{t('username')}</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                type="text"
                                id="username"
                                placeholder={t('placeholderusername')}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="email">{t('email')}</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                id="email"
                                placeholder={t('emailplaceholder')}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="password">{t('password')}</label>
                            <div className={styles.inputContainer}>
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
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
                        <div className={styles.buttonContainer}>
                            <button type="submit">{t('register')}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Notification message={message} color={color} show={show} />
        </div>
    );
}

export default UserRegister;
