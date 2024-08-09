import { useEffect } from 'react';
import styles from './BasketDetails.module.css';

import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { MdOutlineDeleteSweep } from 'react-icons/md';

function BasketDetails({ detail }) {
    return (
        <div className={styles.productDetails}>
            <div className={styles.leftDetails}>
                <img src={detail.src} />
                <div>
                    <span>{detail.name}</span>
                    <span>${detail.price}</span>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button>
                    <FiPlus />
                </button>
                <span>1</span>
                <button>
                    <FiMinus />
                </button>
            </div>
            <button className={styles.deleteBtn}>
                <MdOutlineDeleteSweep />
            </button>
        </div>
    );
}

export default BasketDetails;
