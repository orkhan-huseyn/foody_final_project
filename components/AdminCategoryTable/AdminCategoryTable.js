import styles from './AdminCategoryTable.module.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';

import { FaPencil } from 'react-icons/fa6';
import { MdOutlineDelete } from 'react-icons/md';
const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [categoryImg, setCategoryImg] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    // Requests

    const handleSubmit = async () => {
        const data = {
            name,
            slug,
            img_url:
                'https://t3.ftcdn.net/jpg/06/27/23/56/360_F_627235669_iz0O2leKYRzjxAKdFP7odpp9eCOZREtN.jpg',
        };
        if (isEditing) {
            //PUT REQUEST
            try {
                await axios.put(
                    `http://localhost:3000/api/category/${selectedCategoryId}`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                resetForm();
            } catch (error) {
                console.error('Error:', error);
            }
            resetForm();
        } else {
            //POST REQUEST
            try {
                await axios.post('http://localhost:3000/api/category', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                resetForm();
            } catch (error) {
                console.error('Error:', error);
            }
            resetForm();
        }
        setShowForm(false);
    };

    // GET REQUEST

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/category'
                );
                setCategories(response.data.result.data);
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchCategories();
    }, []);

    // DELETE REQUEST

    const handleDeleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/category/${id}`);
            const updatedCategories = categories.filter(
                (category) => category.id !== id
            );
            setCategories(updatedCategories);
        } catch (error) {
            console.error('Error', error);
        }
    };

    // Toggle form component

    const handleOpenForm = (isEdit, id) => {
        setIsEditing(isEdit);
        setShowForm(true);
        setSelectedCategoryId(id);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        resetForm();
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
        setCategoryImg,
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
                                    <img src={detail.img_url} alt="food" />
                                </td>
                                <td>{detail.name}</td>
                                <td>{detail.slug}</td>
                                <td className={styles.btnColumn}>
                                    <div>
                                        <FaPencil
                                            onClick={() =>
                                                handleOpenForm(true, detail.id)
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
