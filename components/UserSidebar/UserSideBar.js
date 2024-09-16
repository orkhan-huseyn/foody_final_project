import styles from './Sidebar.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { IoBasketOutline, IoBagCheckOutline } from 'react-icons/io5';
import { VscBookmark } from 'react-icons/vsc';
import { CiLogout } from 'react-icons/ci';

function Sidebar() {
    const { t } = useTranslation();
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.replace('/client/login');
    };

    return (
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <Link
                        href="/client/profile"
                        className={
                            isActive('/client/profile') ? styles.active : ''
                        }
                    >
                        <MdOutlineSupervisorAccount className={styles.icon} />
                        {t('profile')}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/client/basket"
                        className={
                            isActive('/client/basket') ? styles.active : ''
                        }
                    >
                        <IoBasketOutline className={styles.icon} />
                        {t('yourbasket')}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/client/orders"
                        className={
                            isActive('/client/orders') ? styles.active : ''
                        }
                    >
                        <VscBookmark className={styles.icon} />
                        {t('yourorders')}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/client/checkout"
                        className={
                            isActive('/client/checkout') ? styles.active : ''
                        }
                    >
                        <IoBagCheckOutline className={styles.icon} />
                        {t('checkout')}
                    </Link>
                </li>
                <li>
                    <button onClick={handleLogout} className={styles.logoutBtn}>
                        <CiLogout className={styles.icon} />
                        {t('logout')}
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
