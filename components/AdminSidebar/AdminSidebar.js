import styles from './AdminSidebar.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import eacamplogo from '../../assets/images/eacamplogo/eacamp.svg';

import {
    MdDashboard,
    MdCategory,
    MdLocalOffer,
    MdProductionQuantityLimits,
    MdHistory,
} from 'react-icons/md';
import { BsBorderWidth } from 'react-icons/bs';
import { IoIosLogOut, IoIosArrowBack } from 'react-icons/io';
import { FaClipboardList } from 'react-icons/fa';

function AdminSidebar({ setShowSidebar, showSidebar }) {
    const { t } = useTranslation();
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

    return (
        <div className={styles.overlay}>
            <motion.div
                className={styles.navbar}
                initial={{ x: '-100%' }}
                animate={{ x: showSidebar ? 0 : '-100%' }}
                transition={{
                    type: 'spring',
                    stiffness: 190,
                    damping: 20,
                }}
            >
                <div className={styles.logoContainer}>
                    <IoIosArrowBack
                        className={styles.arrow}
                        onClick={() => setShowSidebar(false)}
                    />
                    <Link href="/admin">
                        Foody <span>.</span>
                    </Link>
                </div>
                <Link
                    href="/admin"
                    className={isActive('/admin') ? styles.active : ''}
                >
                    <MdDashboard className={styles.icon} />
                    {t('dashboard')}
                </Link>
                <Link
                    href="/admin/products"
                    className={isActive('/admin/products') ? styles.active : ''}
                >
                    <MdProductionQuantityLimits className={styles.icon} />
                    {t('products')}
                </Link>
                <Link
                    href="/admin/restaurants"
                    className={
                        isActive('/admin/restaurants') ? styles.active : ''
                    }
                >
                    <FaClipboardList className={styles.icon} />
                    {t('restaurants')}
                </Link>
                <Link
                    href="/admin/category"
                    className={isActive('/admin/category') ? styles.active : ''}
                >
                    <MdCategory className={styles.icon} />
                    {t('category')}
                </Link>
                <Link
                    href="/admin/orders"
                    className={isActive('/admin/orders') ? styles.active : ''}
                >
                    <BsBorderWidth className={styles.icon} />
                    {t('orders')}
                </Link>
                <Link
                    href="/admin/history"
                    className={isActive('/admin/history') ? styles.active : ''}
                >
                    <MdHistory className={styles.icon} />
                    {t('history')}
                </Link>
                <Link
                    href="/admin/offer"
                    className={isActive('/admin/offer') ? styles.active : ''}
                >
                    <MdLocalOffer className={styles.icon} />
                    {t('offer')}
                </Link>
                <Link href="/admin">
                    <IoIosLogOut className={styles.icon} />
                    {t('logout')}
                </Link>

                <div className={styles.eacamp}>
                    <img src={eacamplogo.src} />
                    <span>EACAMP M3</span>
                </div>
            </motion.div>
        </div>
    );
}

export default AdminSidebar;
