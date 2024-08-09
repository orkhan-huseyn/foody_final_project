import styles from './LoginHeader.module.css';

import Link from 'next/link';
import { RiMenu2Fill } from 'react-icons/ri';
import Languages from '../Languages/Languages';
import HeaderNavbar from 'components/HeaderNavbar/HeaderNavbar';
import { useState } from 'react';

function LoginHeader() {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <>
            <div className={styles.loginPageHeader}>
                <div className={styles.logoContainer}>
                    <RiMenu2Fill
                        onClick={() => setShowNavbar(true)}
                        className={styles.faBar}
                    />
                    <Link href="/">Foody.</Link>
                </div>
                <Languages />
            </div>
            {showNavbar ? <HeaderNavbar setShowNavbar={setShowNavbar} /> : null}
        </>
    );
}

export default LoginHeader;
