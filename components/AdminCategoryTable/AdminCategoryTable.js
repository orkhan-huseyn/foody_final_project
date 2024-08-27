import styles from './AdminCategoryTable.module.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';

import { FaPencil } from 'react-icons/fa6';
import { MdOutlineDelete } from 'react-icons/md';

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Requests

    const handleCategorySubmit = async () => {
        const data = {
            name,
            slug,
            img_url: selectedImage,
        };

        try {
            if (isEditing) {
                //PUT REQUEST
                await axios.put(
                    `http://localhost:3000/api/category/${selectedCategoryId}`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
            } else {
                //POST REQUEST
                await axios.post('http://localhost:3000/api/category', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        } catch (error) {
            console.log(error);

            setErrorMessage(error.response.data);
        }

        fetchCategories();
        setShowForm(false);
        resetForm();
    };

    // GET REQUEST

    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/api/category'
            );
            const result = response.data.result.data;
            setCategories(result);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // DELETE REQUEST

    const handleDeleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/category/${id}`);
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
        setSelectedImage(detail.img_url);
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setSlug('');
        setSelectedImage('');
    };

    // Reset error

    function resetError() {
        setErrorMessage('');
        fetchCategories();
    }

    // Create category header

    const headerDetails = {
        headerTitle: 'Category',
        actionButtonLabel: 'Add Category',
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
        handleCancelForm,
        selectedImage,
        setSelectedImage,
        isEditing,
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
                handleAddCategory={handleAddCategory}
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
