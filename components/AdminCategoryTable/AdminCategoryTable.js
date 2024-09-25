import styles from './AdminCategoryTable.module.css';

import { useEffect, useState } from 'react';
import api from '../../api.js';

import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';
import LoadingIcon from '../Loading/Loading';

import { FaPencil } from 'react-icons/fa6';
import { MdOutlineDelete } from 'react-icons/md';

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [selectedCategoryImage, setSelectedCategoryImage] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // Requests

    const handleCategorySubmit = async () => {
        const data = {
            name,
            slug,
            img_url: selectedCategoryImage,
        };

        try {
            if (isEditing) {
                //PUT REQUEST
                await api.put(`/category/${selectedCategoryId}`, data);
            } else {
                //POST REQUEST
                await api.post('/category', data);
            }
        } catch (error) {
            setErrorMessage(error.response.data);
        }

        fetchCategories();
        setShowForm(false);
        resetForm();
    };

    // GET REQUEST

    const fetchCategories = async () => {
        try {
            const response = await api.get('/category');
            const result = response.data.result.data;
            setCategories(result);
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // DELETE REQUEST

    const handleDeleteCategory = async (id) => {
        try {
            await api.delete(`/category/${id}`);
            fetchCategories();
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Toggle form component

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        resetForm();
    };

    const handleAddCategory = () => {
        setIsEditing(false);
        handleOpenForm();
        resetForm();
    };

    const handleEditCategory = (detail) => {
        handleOpenForm();
        setIsEditing(true);
        setSelectedCategoryId(detail.id);
        setName(detail.name);
        setSlug(detail.slug);
        setSelectedCategoryImage(detail.img_url);
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setSlug('');
        setSelectedCategoryImage('');
    };

    // Reset error

    function resetError() {
        setErrorMessage('');
        fetchCategories();
    }

    // Create category header

    const headerDetails = {
        headerTitle: 'Category',
        actionButtonName: 'Add Category',
        hasDropdown: false,
        hasActionButton: true,
    };

    // ADD/EDIT FORM DETAILS

    const CategoryFields = {
        title: isEditing ? 'Edit Category' : 'Add Category',
        informationTitle: isEditing
            ? 'Edit your Category information'
            : 'Add your Category information',
        handleSubmit: handleCategorySubmit,
        selectedImage: selectedCategoryImage,
        setSelectedImage: setSelectedCategoryImage,
        submitBtnName: isEditing ? 'Edit Category' : 'Create Category',
        handleCancelForm,
        informations: [
            {
                label: 'Name',
                type: 'text',
                value: name,
                id: 'name',
                placeholder: 'Sea food',
                onChange: (e) => setName(e.target.value),
            },
            {
                label: 'Slug',
                type: 'text',
                value: slug,
                id: 'slug',
                placeholder: 'Yummy soup',
                onChange: (e) => setSlug(e.target.value),
            },
        ],
    };

    if (loading) return <LoadingIcon />;

    return errorMessage ? (
        <div className={styles.errorMessage}>
            <p>{errorMessage}</p>
            <button
                onClick={resetError}
                type="button"
                className={styles.errorBtn}
            >
                Yenidən cəhd et
            </button>
        </div>
    ) : (
        <>
            <AdminPageHeader
                headerDetails={headerDetails}
                handleAdd={handleAddCategory}
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
                                    <img src={detail.img_url} alt="food" />
                                </td>
                                <td>{detail.name}</td>
                                <td>{detail.slug}</td>
                                <td className={styles.btnColumn}>
                                    <div>
                                        <FaPencil
                                            onClick={() =>
                                                handleEditCategory(detail)
                                            }
                                            className={styles.editIcon}
                                        />
                                        <MdOutlineDelete
                                            onClick={() =>
                                                handleDeleteCategory(detail.id)
                                            }
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
