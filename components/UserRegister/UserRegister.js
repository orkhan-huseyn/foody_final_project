import styles from './UserRegister.module.css';

import register from '../../assets/images/register/register.svg';

import { FaRegEye } from 'react-icons/fa';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function UserRegister() {
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
                    <form className={styles.form}>
                        <div className={styles.formControl}>
                            <label htmlFor="fullname">{t('fullname')}</label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder={t('fullnameplaceholder')}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="username">{t('username')}</label>
                            <input
                                type="text"
                                id="username"
                                placeholder={t('placeholderusername')}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="email">{t('email')}</label>
                            <input
                                type="email"
                                id="email"
                                placeholder={t('emailplaceholder')}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="password">{t('password')}</label>
                            <div className={styles.inputContainer}>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder={t('placeholderpassword')}
                                />
                                <FaRegEye className={styles.faEye} />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button>{t('register')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;
