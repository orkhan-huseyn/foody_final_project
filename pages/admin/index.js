import ProfileSection from '../../components/ProfileSection';
import OrdersSidebar from '../../components/OrdersSidebar';
import OrdersTable from '../../components/OrdersTable';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <OrdersSidebar />
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <button className={styles.addButton}>+ Add Product</button>
                    <ProfileSection />
                </div>
                <OrdersTable />
            </div>
        </div>
    );
};

export default Dashboard;
