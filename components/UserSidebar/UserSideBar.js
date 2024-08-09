import styles from './Sidebar.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { IoBasketOutline, IoBagCheckOutline } from 'react-icons/io5';
import { VscBookmark } from 'react-icons/vsc';
import { CiLogout } from 'react-icons/ci';

function Sidebar() {
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

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
                        Profile
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
                        Your Basket
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
                        Your Orders
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
                        Checkout
                    </Link>
                </li>
                <li>
                    <Link href="/client/logout">
                        <CiLogout className={styles.icon} />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
