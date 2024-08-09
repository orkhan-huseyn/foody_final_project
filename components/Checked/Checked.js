import styles from './Checked.module.css';

import checked from '../../assets/images/checkout/checked.svg';

function Checkout() {
    return (
        <div className={styles.checkedContainer}>
            <div className={styles.image}>
                <img src={checked.src} alt="checked icon" />
            </div>
            <div className={styles.checkedTitle}>
                <h2>Your order has been received</h2>
            </div>
        </div>
    );
}

export default Checkout;
