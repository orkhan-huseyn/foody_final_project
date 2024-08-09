import styles from './HeaderNavbar.module.css';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RiCloseLargeFill } from 'react-icons/ri';

function HeaderNavbar({ setShowNavbar }) {
    const router = useRouter();
    const isActive = (path) => router.pathname === path;
    return (
        <div className={styles.overlayContainer}>
            <motion.div
                className={styles.navbar}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <button
                    onClick={() => setShowNavbar(false)}
                    className={styles.closeBtn}
                >
                    <RiCloseLargeFill />
                </button>

                <Link href="/client/login" className={styles.signupBtn}>
                    Sign Up
                </Link>

                <nav>
                    <Link
                        href="/"
                        className={isActive('/') ? styles.active : ''}
                    >
                        Home
                    </Link>
                    <Link
                        href="/client/restaurants"
                        className={
                            isActive('/client/restaurants') ? styles.active : ''
                        }
                    >
                        Restaurants
                    </Link>
                    <Link
                        href="/client/about-us"
                        className={
                            isActive('/client/about-us') ? styles.active : ''
                        }
                    >
                        About Us
                    </Link>
                    <Link
                        href="/client/howitworks"
                        className={
                            isActive('/client/howitworks') ? styles.active : ''
                        }
                    >
                        How it works
                    </Link>
                    <Link
                        href="/client/faqs"
                        className={
                            isActive('/client/faqs') ? styles.active : ''
                        }
                    >
                        Faqs
                    </Link>
                </nav>
            </motion.div>
        </div>
    );
}

export default HeaderNavbar;
