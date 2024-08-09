import { color } from 'framer-motion';
import styles from './UserProfile.module.css';

import { IoMdCloudUpload } from 'react-icons/io';

function Profile() {
    return (
        <div className={styles.profileContainer}>
            <h2 className={styles.profileHeader}>Profile</h2>
            <div className={styles.uploadContainer}>
                <input
                    type="file"
                    id="file"
                    style={{ display: 'none' }}
                ></input>
                <label htmlFor="file" className={styles.uploadCircle}>
                    <IoMdCloudUpload
                        style={{ color: '#6FCF97', fontSize: '48px' }}
                    />
                    <span style={{ color: '#929292', fontSize: '14px' }}>
                        upload
                    </span>
                </label>
            </div>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="contact">Contact</label>
                    <input type="text" placeholder="+994" id="contact" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="user@gmail.com"
                        id="email"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username" id="username" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        placeholder="Baku, Azerbaijan"
                        id="address"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="fullname" id="fullname" />
                </div>
                <div className={styles.saveButton}>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
