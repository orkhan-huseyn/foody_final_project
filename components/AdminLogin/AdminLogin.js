import styles from './Adminlogin.module.css';

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
                    <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Login Illustration" />
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
