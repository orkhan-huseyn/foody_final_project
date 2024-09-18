import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Adminlogin.module.css';
const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('adminAuth');
        const protectedRoutes = [
            '/admin/restaurants',
            '/admin/products',
            '/admin/category',
            '/admin/orders',
            '/admin/history',
            '/admin/offers'
        ];
        
        if (!isAuthenticated && protectedRoutes.includes(router.pathname)) {
            router.push('/admin/login');
        }
    }, [router]);
    const handleLogin = () => {
        if (username.toLowerCase() === 'm3' && password.toLowerCase() === 'm3') {
            localStorage.setItem('adminAuth', 'true'); 
            router.push('/admin/restaurants');
        } else {
            setShowAlert(true); 
            setTimeout(() => {
                setShowAlert(false); 
            }, 2500);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.header}>Foody.</div>
            <div className={styles.loginBox}>
                <div className={styles.form}>
                    <h1>Welcome Admin</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={styles.signInButton} onClick={handleLogin}>
                        Sign in
                    </button>
                </div>
                <div className={styles.imageBox}>
                    <img src="https://m3groups.com/img/our-services/M3-Group-Logo.png" alt="Login Illustration" />
                </div>
            </div>
            {showAlert && (
                <div className={styles.alertBox}>
                    <p>Wrong Username And Password!</p>
                </div>
            )}
        </div>
    );
};

export default AdminLogin;
