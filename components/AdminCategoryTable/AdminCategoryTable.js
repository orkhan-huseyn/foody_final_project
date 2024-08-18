import styles from './AdminCategoryTable.module.css';

import { useState } from 'react';

import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';

import { FaPencil } from 'react-icons/fa6';
import { MdOutlineDelete } from 'react-icons/md';

const CategoryTable = () => {
    const [categories, setCategories] = useState([
        {
            id: 9177,
            name: 'Pizza',
            slug: 'yummy-pizza',
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    // Requests

    const handleSubmit = () => {
        if (isEditing) {
            // PUT REQUEST
            console.log('edit');
            resetForm();
        } else {
            // POST REQUEST
            console.log('add');
            resetForm();
        }
        setShowForm(false);
    };

    const handleCancelForm = () => {
        // CLOSE FORM
        console.log('cancel');

        setShowForm(false);
        resetForm();
    };

    const handleDeleteCategory = () => {
        // DELETE REQUEST
        console.log('delete');
    };

    // Toggle form component

    const handleOpenForm = (isEdit) => {
        setIsEditing(isEdit);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setSlug('');
    };

    // Create category header

    const headerDetails = {
        headerTitle: 'Category',
        actionButtonLabel: 'Add Category',
        hasDropdown: false,
        hasActionButton: true,
    };

    const CategoryFields = {
        title: isEditing ? 'Edit Category' : 'Add Category',
        informationTitle: isEditing
            ? 'Edit your Category information'
            : 'Add your Category information',
        handleSubmit,
        handleCancelForm,
        informations: [
            {
                label: 'Name',
                type: 'text',
                value: name,
                id: 'name',
                placeholder: 'Sea food',
                onChange: setName,
            },

            {
                label: 'Slug',
                type: 'text',
                value: slug,
                id: 'slug',
                placeholder: 'Yummy soup',
                onChange: setSlug,
            },
        ],
    };

    return (
        <>
            <AdminPageHeader
                headerDetails={headerDetails}
                handleOpenForm={handleOpenForm}
            />
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Slug</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((detail) => (
                            <tr key={detail.id}>
                                <td className={styles.categoryId}>
                                    <span>{detail.id}</span>
                                </td>
                                <td className={styles.imageColumn}>
                                    <img src={detail.image} alt="food" />
                                </td>
                                <td>{detail.name}</td>
                                <td>{detail.slug}</td>
                                <td className={styles.btnColumn}>
                                    <div>
                                        <FaPencil
                                            onClick={() => handleOpenForm(true)}
                                            className={styles.editIcon}
                                        />
                                        <MdOutlineDelete
                                            onClick={handleDeleteCategory}
                                            className={styles.deleteIcon}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showForm && (
                <AdminFormSection
                    handleCloseForm={handleCloseForm}
                    fields={CategoryFields}
                />
            )}
        </>
    );
};

export default CategoryTable;
