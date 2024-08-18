import styles from './AdminFormSection.module.css';

import AdminFormDropdown from '../AdminFormDropdown/AdminFormDropdown';

import { IoMdCloseCircle, IoMdCloudUpload } from 'react-icons/io';

function AdminFormSection({ handleCloseForm, fields }) {
    const {
        title,
        informationTitle,
        informations,
        handleSubmit,
        handleCancelForm,
    } = fields;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className={styles.formHeader}>
                        <IoMdCloseCircle
                            onClick={() => handleCloseForm()}
                            className={styles.closeModalBtn}
                        />
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                    <div className={styles.uploadImageContainer}>
                        <div className={styles.uploadTitle}>
                            <span>Upload Image</span>
                        </div>
                        <div className={styles.uploadInput}>
                            <input type="file" id="upload" />
                            <label htmlFor="upload">
                                <IoMdCloudUpload
                                    className={styles.uploadIcon}
                                />
                                <span>upload</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.formDetails}>
                        <span>{informationTitle}</span>
                        <div className={styles.details}>
                            <div>
                                {informations.map((information, i) => (
                                    <div key={i} className={styles.formControl}>
                                        <label htmlFor={information.id}>
                                            {information.label}
                                        </label>
                                        {information.type === 'dropdown' ? (
                                            <AdminFormDropdown />
                                        ) : information.type === 'textarea' ? (
                                            <textarea
                                                rows={'4'}
                                                value={information.value}
                                                placeholder={
                                                    information.placeholder
                                                }
                                                onChange={(e) =>
                                                    information.onChange(
                                                        e.target.value
                                                    )
                                                }
                                                id={information.id}
                                            />
                                        ) : (
                                            <input
                                                onChange={(e) =>
                                                    information.onChange(
                                                        e.target.value
                                                    )
                                                }
                                                value={information.value}
                                                type={information.type}
                                                id={information.id}
                                                placeholder={
                                                    information.placeholder
                                                }
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.btnContainer}>
                        <button type="button" onClick={handleCancelForm}>
                            Cancel
                        </button>
                        <button type="submit">Create Category</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminFormSection;
