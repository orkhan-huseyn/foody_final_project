import styles from './AdminOfferTable.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';
import { useState, useEffect } from 'react';
import axios from 'axios';
function AdminOfferTable() {
    const [offers, setOffers] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOfferImage, setSelectedOfferImage] = useState('');
    const [selectedOfferId, setSelectedOfferId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleOfferSubmit = async () => {
        const data = {
            name,
            description,
            img_url: selectedOfferImage,
        };

        try {
            if (isEditing) {
                //PUT REQUEST
                await axios.put(
                    `http://localhost:3000/api/offer/${selectedOfferId}`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
            } else {
                //POST REQUEST
                await axios.post('http://localhost:3000/api/offer', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        } catch (error) {
            console.log(error.message);
        }

        fetchOffers();
        setShowForm(false);
        resetForm();
    };

    // GET REQUEST

    const fetchOffers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/offer');
            const result = response.data.result.data;
            setOffers(result);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    // DELETE REQUEST

    const handleDeleteOffer = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/offer/${id}`);
            fetchOffers();
        } catch (error) {
            console.log(error.message);
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

    const handleAddOffer = () => {
        setIsEditing(false);
        handleOpenForm();
        resetForm();
    };

    const handleEditOffer = (detail) => {
        handleOpenForm();
        setIsEditing(true);
        setSelectedOfferId(detail.id);
        setName(detail.name);
        setDescription(detail.description);
        setSelectedOfferImage(detail.img_url);
    };

    // Reset form

    const resetForm = () => {
        setName('');
        setDescription('');
        setSelectedOfferImage('');
    };

    const OfferFields = {
        title: isEditing ? 'Edit Offer' : 'Add Offer',
        informationTitle: isEditing
            ? 'Edit your Offer information'
            : 'Add your Offer information',
        handleSubmit: handleOfferSubmit,
        selectedImage: selectedOfferImage,
        setSelectedImage: setSelectedOfferImage,
        submitBtnName: isEditing ? 'Edit Offer' : 'Create Offer',
        handleCancelForm,
        informations: [
            {
                label: 'Title',
                type: 'text',
                value: name,
                id: 'title',
                placeholder: 'Do you like Pizza at Papa John’s?',
                onChange: (e) => setName(e.target.value),
            },
            {
                label: 'Description',
                type: 'textarea',
                value: description,
                id: 'description',
                placeholder: 'Yes you like pizza,Yummy',
                onChange: (e) => setDescription(e.target.value),
            },
        ],
    };

    const headerDetails = {
        headerTitle: 'Offers',
        hasActionButton: true,
        actionButtonName: 'Add offer',
    };

    return (
        <>
            <AdminPageHeader
                headerDetails={headerDetails}
                handleAdd={handleAddOffer}
            />
            <div className={styles.tableContainer}>
                <table className={styles.offerTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Descriptions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((detail) => (
                            <tr key={detail.id}>
                                <td className={styles.offerId}>
                                    <span>{detail.id}</span>
                                </td>
                                <td>
                                    <img
                                        src={detail.img_url}
                                        alt={detail.title}
                                        className={styles.offerImage}
                                    />
                                </td>
                                <td>{detail.name}</td>
                                <td>{detail.description}</td>
                                <td>
                                    <FaEdit
                                        className={styles.editIcon}
                                        onClick={() => handleEditOffer(detail)}
                                    />
                                    <FaTrashAlt
                                        className={styles.deleteIcon}
                                        onClick={() =>
                                            handleDeleteOffer(detail.id)
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.paginationContainer}>
                    <div className={styles.paginationInfo}>
                        <span>1 / 1</span>
                    </div>
                    <div className={styles.paginationControls}>
                        <button className={styles.paginationButton}>‹</button>
                        <select className={styles.pageSelector}>
                            <option value="01">01</option>
                        </select>
                        <button className={styles.paginationButton}>›</button>
                    </div>
                </div>
            </div>

            {showForm && (
                <AdminFormSection
                    handleCloseForm={handleCloseForm}
                    fields={OfferFields}
                />
            )}
        </>
    );
}

export default AdminOfferTable;
