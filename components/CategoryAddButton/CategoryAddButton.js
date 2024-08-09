import styles from './CategoryAddButton.module.css';

import { useState } from 'react';

const CategoryAddButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className={styles.addButton} onClick={openModal}>
                + Add Category
            </button>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2 className={styles.modalTitle}>Add Category</h2>
                        <div className={styles.formGroup}>
                            <label
                                htmlFor="categoryName"
                                className={styles.label}
                            >
                                Category Name
                            </label>
                            <input
                                type="text"
                                id="categoryName"
                                placeholder="Enter category name"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label
                                htmlFor="categoryDescription"
                                className={styles.label}
                            >
                                Description
                            </label>
                            <textarea
                                id="categoryDescription"
                                placeholder="Enter description"
                                className={styles.textarea}
                            ></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Upload Image</label>
                            <button className={styles.uploadButton}>
                                Upload
                            </button>
                        </div>
                        <div className={styles.buttonGroup}>
                            <button
                                className={styles.cancelButton}
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button className={styles.createButton}>
                                Create Category
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryAddButton;
