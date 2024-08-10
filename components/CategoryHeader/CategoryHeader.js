import styles from './CategoryHeader.module.css';

import { FaPlus } from 'react-icons/fa6';

function CategoryHeader() {
    return (
        <div className={styles.header}>
            <span>Category</span>
            <button className={styles.addBtn}>
                <FaPlus className={styles.plusIcon} />
                <span>Add category</span>
            </button>
        </div>
    );
}

export default CategoryHeader;
