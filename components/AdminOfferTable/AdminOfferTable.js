import styles from './AdminOfferTable.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import AdminPageHeader from 'components/AdminPageHeader/AdminPageHeader';
import AdminFormSection from 'components/AdminFormSection/AdminFormSection';
import LoadingIcon from '../Loading/Loading';
import { useState, useEffect } from 'react';
import api from '../../api';
function AdminOfferTable() {
    const [offers, setOffers] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOfferImage, setSelectedOfferImage] = useState('');
    const [selectedOfferId, setSelectedOfferId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleOfferSubmit = async () => {
        const data = {
            name,
            description,
            img_url: selectedOfferImage,
        };

        try {
            if (isEditing) {
                //PUT REQUEST
                await api.put(`/offer/${selectedOfferId}`, data);
            } else {
                //POST REQUEST
                await api.post('/offer', data);
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
            const response = await api.get('/offer');
            const result = response.data.result.data;
            setOffers(result);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    // DELETE REQUEST

    const handleDeleteOffer = async (id) => {
        try {
            await api.delete(`/offer/${id}`);
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

    if (loading) return <LoadingIcon />;

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
