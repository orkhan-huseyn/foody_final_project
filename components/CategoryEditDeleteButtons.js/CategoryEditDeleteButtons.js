import styles from './CategoryEditDeleteButtons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const CategoryEditDeleteButtons = ({ onEdit, onDelete }) => {
    return (
        <div className={styles.buttonsContainer}>
            <FontAwesomeIcon
                icon={faEdit}
                className={styles.icon}
                onClick={onEdit}
            />
            <FontAwesomeIcon
                icon={faTrash}
                className={styles.icon}
                onClick={onDelete}
            />
        </div>
    );
};

export default CategoryEditDeleteButtons;
