import styles from './AdminLayout.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Languages from 'components/Languages/Languages';
import AdminSidebar from 'components/AdminSidebar/AdminSidebar';

import adminprofile from '../../assets/images/adminprofileimage/adminprofile.svg';
import eacamp from '../../assets/images/eacamplogo/eacamp.svg';

import {
    MdDashboard,
    MdCategory,
    MdLocalOffer,
    MdProductionQuantityLimits,
    MdHistory,
} from 'react-icons/md';
import { BsBorderWidth } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { RiMenu2Fill } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa6';

import { FaClipboardList } from 'react-icons/fa';
import { useState } from 'react';

function AdminLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.logoContainer}>
                    <RiMenu2Fill
                        className={styles.menuIcon}
                        onClick={() => setShowSidebar(true)}
                    />
                    <Link href="/admin">
                        Foody<span className={styles.dot}>.</span>
                    </Link>
                </div>

                <div className={styles.btnContainer}>
                    <button className={styles.addProduct}>
                        {' '}
                        <FaPlus className={styles.plusIcon} />{' '}
                        <span>Add product</span>
                    </button>
                    <div className={styles.languages}>
                        <Languages backgroundColor={'#27283C'} />
                    </div>

                    <button className={styles.adminImage}>
                        <img src={adminprofile.src} />
                    </button>
                </div>
            </header>

            <main className={styles.mainContainer}>
                <div className={styles.sidebar}>
                    <Link
                        href="/admin"
                        className={isActive('/admin') ? styles.active : ''}
                    >
                        <MdDashboard className={styles.icon} />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/products"
                        className={
                            isActive('/admin/products') ? styles.active : ''
                        }
                    >
                        <MdProductionQuantityLimits className={styles.icon} />
                        Products
                    </Link>
                    <Link
                        href="/admin/restaurants"
                        className={
                            isActive('/admin/restaurants') ? styles.active : ''
                        }
                    >
                        <FaClipboardList className={styles.icon} />
                        Restaurants
                    </Link>
                    <Link
                        href="/admin/category"
                        className={
                            isActive('/admin/category') ? styles.active : ''
                        }
                    >
                        <MdCategory className={styles.icon} />
                        Category
                    </Link>
                    <Link
                        href="/admin/orders"
                        className={
                            isActive('/admin/orders') ? styles.active : ''
                        }
                    >
                        <BsBorderWidth className={styles.icon} />
                        Orders
                    </Link>
                    <Link
                        href="/admin/history"
                        className={
                            isActive('/admin/history') ? styles.active : ''
                        }
                    >
                        <MdHistory className={styles.icon} />
                        History
                    </Link>
                    <Link
                        href="/admin/offer"
                        className={
                            isActive('/admin/offer') ? styles.active : ''
                        }
                    >
                        <MdLocalOffer className={styles.icon} />
                        Offer
                    </Link>
                    <Link href="/admin">
                        <IoIosLogOut className={styles.icon} />
                        Logout
                    </Link>
                </div>

                <div className={styles.content}>{children}</div>

                <div className={styles.eacamp}>
                    <img src={eacamp.src} />
                    <span>EACAMP M3</span>
                </div>
            </main>

            {showSidebar ? (
                <AdminSidebar
                    setShowSidebar={setShowSidebar}
                    showSidebar={showSidebar}
                />
            ) : (
                ''
            )}
        </div>
    );
}

export default AdminLayout;
