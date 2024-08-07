import styles from '../styles/LoginHeader.module.css';

import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import Languages from './Languages';

function LoginHeader() {
    return (
        <div className={styles.loginPageHeader}>
            <Link href="/">
                <FaBarsStaggered className={styles.faBar} />
                Foody.
            </Link>
            <Languages />
        </div>
    );
}

export default LoginHeader;
