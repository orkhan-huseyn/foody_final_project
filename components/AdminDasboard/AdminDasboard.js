import styles from './AdminDasboard.module.css';
import dynamic from 'next/dynamic';

const OrdersChart = dynamic(() => import('./OrdersChart'), { ssr: false });
const SalaryChart = dynamic(() => import('./SalaryChart'), { ssr: false });

const AdminDasboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={`${styles.widget} ${styles.ordersChartContainer}`}>
                <h2 className={styles.widgetTitle}>Orders</h2>
                <div className={styles.widgetContent}>
                    <OrdersChart />
                </div>
            </div>
            <div className={`${styles.widget} ${styles.salaryChartContainer}`}>
                <h2 className={styles.widgetTitle}>Total Salary</h2>
                <div className={styles.widgetContent}>
                    <SalaryChart />
                </div>
            </div>
            <div className={`${styles.widget} ${styles.risksContainer}`}>
                <h2 className={styles.widgetTitle}>Assigned Risks</h2>
                <div className={styles.widgetContent}>
                    There are no risks assigned.
                </div>
            </div>
            <div className={`${styles.widget} ${styles.actionItemsContainer}`}>
                <h2 className={styles.widgetTitle}>Assigned Action Items</h2>
                <div className={styles.widgetContent}>
                    There are no action items assigned.
                </div>
            </div>
        </div>
    );
};

export default AdminDasboard;
