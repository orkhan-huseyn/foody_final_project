import styles from './ProductDetails.module.css';

import { useTranslation } from 'react-i18next';

import { CiCirclePlus } from 'react-icons/ci';

function ProductDetails({ detail }) {
    const { t } = useTranslation();
    return (
        <div className={styles.productsDetails}>
            <div className={styles.left}>
                <img src={detail.src} alt="pizza" />
                <div>
                    <span>{detail.title}</span>
                    <span>{detail.desc}</span>
                </div>
            </div>
            <div className={styles.right}>
                <div>
                    <span>{t('from')}</span>
                    <span>{detail.price}</span>
                </div>
                <button>
                    <CiCirclePlus className={styles.icon} />
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;
