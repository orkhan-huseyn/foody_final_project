import styles from './HeaderNavbar.module.css';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from '../../api';

import { RiCloseLargeFill } from 'react-icons/ri';
import profileimg from '../../assets/images/adminprofileimage/adminprofile.svg';

function HeaderNavbar({ setShowNavbar }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [fullName, setFullName] = useState('');
    const isActive = (path) => router.pathname === path;
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await api.get('/auth/user');
            const userData = response.data.user;
            setFullName(userData.fullname);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.replace('/client/login');
    };

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

                {!isLoggedIn ? (
                    <Link href="/client/login" className={styles.signupBtn}>
                        Sign Up
                    </Link>
                ) : (
                    <div className={styles.userIcon}>
                        <img src={profileimg.src} />
                        <span>{fullName}</span>
                    </div>
                )}

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

                    {isLoggedIn && (
                        <Link
                            href="/client/profile"
                            className={
                                isActive('/client/profile') ? styles.active : ''
                            }
                        >
                            Profile
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link
                            href="/client/basket"
                            className={
                                isActive('/client/basket') ? styles.active : ''
                            }
                        >
                            Your Basket
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link
                            href="/client/orders"
                            className={
                                isActive('/client/orders') ? styles.active : ''
                            }
                        >
                            Your Orders
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link
                            href="/client/checkout"
                            className={
                                isActive('/client/checkout')
                                    ? styles.active
                                    : ''
                            }
                        >
                            Checkout
                        </Link>
                    )}
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

                    {isLoggedIn && (
                        <button onClick={handleLogout}>Logout</button>
                    )} 
                </nav>
            </motion.div>
        </div>
    );
}

export default HeaderNavbar;
