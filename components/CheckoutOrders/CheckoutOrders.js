import Link from 'next/link';
import styles from './CheckoutOrders.module.css';

function CheckoutOrders() {
    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.checkoutBtn}>
                <Link href="/client/checkout" className={styles.button}>
                    Checkout
                    <span className={styles.price}>$37.40</span>
                </Link>
            </div>
        </div>
    );
}

export default CheckoutOrders;
