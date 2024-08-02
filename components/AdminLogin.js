import React from 'react';
import styles from '../styles/adminlogin.module.css';

const AdminLogin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Foody.</div>
            <div className={styles.loginBox}>
                <div className={styles.form}>
                    <h1>Welcome Admin</h1>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className={styles.signInButton}>Sign in</button>
                </div>
                <div className={styles.imageBox}>
                    <img src="https://s3-alpha-sig.figma.com/img/dabf/9274/935493196a509119e072f3b68c7441d4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KGDfotaMWDq~~V4Mw3uWMOVoLclgoiz1anT6RIUory2U2FqDJ1m5otzLJetlzQfV7UVoZXTCesTQ4n215y3bidNbOXgF~NECO7RalqkFJcq-lm~w24hhIN6PjuW7KKfa5uT0heiNoISRyXydDsTqm16M1nv8gV~WuK41XczatLzOn8fLsuzWOFmjvqiMy8Bch8zNKclnGsCagvX3pn9S8FQFIWoXZFWHqDQELsijz2lLiVQWykRHxXmUt4WJOGCo84AeCQdkToo-axXV6mc0zN1NjlxsFH3w9dkiKQ1uV8sY7OJczW8zEmajdXnW0N7eYewIgyGgA-MpprSDE7iNdA__" alt="Login Illustration" />
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
