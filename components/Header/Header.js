import styles from './Header.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { RiMenu2Fill } from 'react-icons/ri';
import { IoMdBasket } from 'react-icons/io';

import HeaderNavbar from 'components/HeaderNavbar/HeaderNavbar';
import Languages from '../Languages/Languages';
import Usermenu from 'components/UserMenu/Usermenu';

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    if (!pathname) return null;

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <button onClick={() => setShowNavbar(true)}>
                    <RiMenu2Fill className={styles.menuIcon} />
                </button>
                <Link href="/" className={styles.logo}>
                    Foody<span className={styles.logoDot}>.</span>
                </Link>
            </div>

            <nav className={styles.navbar}>
                <Link
                    href="/"
                    className={pathname === '/' ? `${styles.active}` : ''}
                >
                    {t('home')}
                </Link>
                <Link
                    href="/client/restaurants"
                    className={
                        pathname.startsWith('/client/restaurants')
                            ? `${styles.active}`
                            : ''
                    }
                >
                    {t('restaurants')}
                </Link>
                <Link
                    href="/client/about-us"
                    className={
                        pathname.startsWith('/client/about-us')
                            ? `${styles.active}`
                            : ''
                    }
                >
                    {t('about')}
                </Link>
                <Link
                    href="/client/howitworks"
                    className={
                        pathname.startsWith('/client/howitworks')
                            ? `${styles.active}`
                            : ''
                    }
                >
                    {t('howitworks')}
                </Link>
                <Link
                    href="/client/faqs"
                    className={
                        pathname.startsWith('/client/faqs')
                            ? `${styles.active}`
                            : ''
                    }
                >
                    {t('faqs')}
                </Link>
            </nav>

            <div className={styles.inputContainer}>
                <input type="text" placeholder={t('search')} />
                <Languages />

                <div className={styles.buttonContainer}>
                    {isLoggedIn && (
                        <Link
                            className={styles.headerBasketIcon}
                            href="/client/basket"
                        >
                            <span>
                                <IoMdBasket style={{ fontSize: '25px' }} />
                            </span>
                        </Link>
                    )}
                    {!isLoggedIn && (
                        <Link className={styles.signUpBtn} href="/client/login">
                            {t('signup')}
                        </Link>
                    )}
                    {isLoggedIn && <Usermenu />}
                </div>
            </div>

            {showNavbar ? <HeaderNavbar setShowNavbar={setShowNavbar} /> : null}
        </header>
    );
}

export default Header;
