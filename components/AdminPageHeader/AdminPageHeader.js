import styles from './AdminPageHeader.module.css';

import AdminHeaderDropdown from 'components/AdminHeaderDropdown/AdminHeaderDropdown';

import { FaPlus } from 'react-icons/fa6';

function AdminPageHeader({ headerDetails, handleOpenForm }) {
    const { headerTitle, actionButtonLabel, hasDropdown, hasActionButton } =
        headerDetails;

    return (
        <div className={styles.header}>
            <span className={styles.headerTitle}>{headerTitle}</span>

            <div className={styles.right}
            >
                {hasDropdown ? <AdminHeaderDropdown /> : ''}
                
                {hasActionButton ? (
                    <button
                        className={styles.addProductBtn}
                        onClick={() => handleOpenForm(false)}
                    >
                        <FaPlus className={styles.plusIcon} />
                        <span className={styles.buttonText}>
                            {actionButtonLabel}
                        </span>
                    </button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default AdminPageHeader;
