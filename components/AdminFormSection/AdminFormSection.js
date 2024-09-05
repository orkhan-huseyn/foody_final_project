import { useState, useEffect } from 'react';
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
        selectedImage,
        setSelectedImage,
        submitBtnName,
        dropdownOptions,
        setId,
    } = fields;

    const [imagePreview, setImagePreview] = useState(
        'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    );

    useEffect(() => {
        setImagePreview(selectedImage);
    }, [selectedImage]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataURL = reader.result;
                setImagePreview(dataURL);
                setSelectedImage(dataURL);
            };

            reader.readAsDataURL(file);
        } else {
            console.error('No file selected.');
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <div className={styles.formHeader}>
                        <IoMdCloseCircle
                            onClick={handleCloseForm}
                            className={styles.closeModalBtn}
                        />
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                    <div className={styles.uploadImageContainer}>
                        <div className={styles.uploadTitle}>
                            <span>Upload Image</span>
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    className={styles.uploadImage}
                                    alt="Preview"
                                />
                            )}
                        </div>

                        <div className={styles.uploadInput}>
                            <input
                                type="file"
                                id="upload"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="upload">
                                <IoMdCloudUpload
                                    className={styles.uploadIcon}
                                />
                                <span>Upload</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.formDetails}>
                        <span>{informationTitle}</span>
                        <div className={styles.details}>
                            {informations.map((information, i) => (
                                <div key={i} className={styles.formControl}>
                                    <label htmlFor={information.id}>
                                        {information.label}
                                    </label>
                                    {information.type === 'dropdown' ? (
                                        <AdminFormDropdown
                                            dropdownOptions={dropdownOptions}
                                            setId={setId}
                                        />
                                    ) : information.type === 'textarea' ? (
                                        <textarea
                                            rows="4"
                                            value={information.value}
                                            placeholder={
                                                information.placeholder
                                            }
                                            onChange={information.onChange}
                                            id={information.id}
                                        />
                                    ) : (
                                        <input
                                            onChange={information.onChange}
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

                    <div className={styles.btnContainer}>
                        <button type="button" onClick={handleCancelForm}>
                            Cancel
                        </button>
                        <button type="submit">{submitBtnName}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminFormSection;
