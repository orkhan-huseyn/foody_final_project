import Link from "next/link";
import styles from "../styles/Login.module.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import loginImage from '../assets/images/login/client.png'
import flag from '../assets/images/login/flag.png'



function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageHeader}>
        <Link href='/'>
        <FaBarsStaggered className={styles.faBar} />
          Foody.
        </Link>
      </div>
      <div className={styles.loginPageBody}>
        <div className={styles.loginPageMain}>
          <img src={loginImage.src} />
        </div>
        <div className={styles.loginPageLogin}>
          <div className={styles.loginPageLoginTitle}>
            <h3>Login</h3>
            <h3>Register</h3>
          </div>
          <div className={styles.loginPageLoginInputUser}>
            <h4>Username</h4>
            <input type="text" />
          </div>
          <div className={styles.loginPageLoginInputPassword}>
            <h4>Password</h4>
            <div className={styles.inputContainer}>
              <input type="password" />
              <FaRegEye className={styles.faEye}/>
            </div>
          </div>
          <div className={styles.loginPageLoginButton}>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*! icon elave et */
