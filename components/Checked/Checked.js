import styles from './Checked.module.css';

import { useTranslation } from 'react-i18next';

import checked from '../../assets/images/checkout/checked.svg';

function Checkout() {
    const { t } = useTranslation();
    return (
        <div className={styles.checkedContainer}>
            <div className={styles.image}>
                <img src={checked.src} alt="checked icon" />
            </div>
            <div className={styles.checkedTitle}>
                <h2>{t('checkedtext')}</h2>
            </div>
        </div>
    );
}

export default Checkout;
