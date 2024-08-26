import styles from './Header.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RiMenu2Fill } from 'react-icons/ri';

import HeaderNavbar from 'components/HeaderNavbar/HeaderNavbar';
import Languages from '../Languages/Languages';

function Header() {
    const { t, i18n } = useTranslation();
    const [showNavbar, setShowNavbar] = useState(false);
    const pathname = usePathname();

    console.log(i18n);

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
                    <Link href="/client/login">{t('signup')}</Link>
                </div>
            </div>

            {showNavbar ? <HeaderNavbar setShowNavbar={setShowNavbar} /> : null}
        </header>
    );
}

export default Header;
