import styles from './ProductDetails.module.css';

import { useTranslation } from 'react-i18next';

import { CiCirclePlus } from 'react-icons/ci';

function ProductDetails({ product }) {
    const { t } = useTranslation();

    return (
        <div className={styles.productsDetails}>
            <div className={styles.left}>
                <img src={product.img_url} alt="pizza" />
                <div>
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                </div>
            </div>
            <div className={styles.right}>
                <div>
                    <span>{t('from')}</span>
                    <span>${product.price}.00</span>
                </div>
                <button>
                    <CiCirclePlus className={styles.icon} />
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;
