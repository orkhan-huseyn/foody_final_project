import styles from './AdminPageHeader.module.css';

import AdminHeaderDropdown from 'components/AdminHeaderDropdown/AdminHeaderDropdown';

import { FaPlus } from 'react-icons/fa6';

function AdminPageHeader({
    headerDetails,
    handleAdd,
    dropdownOptions,
    setRestaurants,
    restaurants,
}) {
    const { headerTitle, actionButtonName, hasDropdown, hasActionButton } =
        headerDetails;

    return (
        <div className={styles.header}>
            <span className={styles.headerTitle}>{headerTitle}</span>
            <div className={styles.right}>
                {hasDropdown ? (
                    <AdminHeaderDropdown
                        dropdownOptions={dropdownOptions}
                        setRestaurants={setRestaurants}
                        restaurants={restaurants}
                    />
                ) : (
                    ''
                )}
                {hasActionButton ? (
                    <button
                        className={styles.addProductBtn}
                        onClick={() => handleAdd()}
                    >
                        <FaPlus className={styles.plusIcon} />
                        <span className={styles.buttonText}>
                            {actionButtonName}
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
