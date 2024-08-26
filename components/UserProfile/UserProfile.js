import styles from './UserProfile.module.css';

import { IoMdCloudUpload } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t } = useTranslation();
    return (
        <div className={styles.profileContainer}>
            <h2 className={styles.profileHeader}>{t('profile')}</h2>
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
                        {t('upload')}
                    </span>
                </label>
            </div>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="contact">{t('contact')}</label>
                    <input type="text" placeholder="+994" id="contact" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">{t('email')}</label>
                    <input
                        type="email"
                        placeholder={t('emailplaceholder')}
                        id="email"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="username">{t('username')}</label>
                    <input
                        type="text"
                        placeholder={t('placeholderusername')}
                        id="username"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">{t('address')}</label>
                    <input
                        type="text"
                        placeholder={`${t('baku')}, ${t('azerbaijan')}`}
                        id="address"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="fullname">{t('fullname')}</label>
                    <input
                        type="text"
                        placeholder={t('fullnameplaceholder')}
                        id="fullname"
                    />
                </div>
                <div className={styles.saveButton}>
                    <button>{t('save')}</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
