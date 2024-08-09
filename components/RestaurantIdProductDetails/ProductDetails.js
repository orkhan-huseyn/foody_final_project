import styles from './ProductDetails.module.css';
import { CiCirclePlus } from 'react-icons/ci';

function ProductDetails({ detail }) {
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
                    <span>From</span>
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
