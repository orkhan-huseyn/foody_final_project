import styles from './UserProfile.module.css';
import { IoMdCloudUpload } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Notification from '../Notification/Notification';
import api from '../../api';

function Profile() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [contact, setContact] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [show, setShow] = useState(false);
    const [color, setColor] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/client/login');
        }
    }, [router]);

    const fetchUserData = async () => {
        try {
            const response = await api.get('/auth/user');
            const userData = response.data.user;
            setUsername(userData.username || '');
            setFullname(userData.fullname || '');
            setEmail(userData.email || '');
            setAddress(userData.address || '');
            setContact(userData.phone || '');
            setLoading(false);
        } catch (err) {
            setMessage('İstifadəçi məlumatları yüklənmədi');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username,
            phone: contact,
            fullname,
            email,
        };

        try {
            await api.put('/auth/user', data);
            setColor('green');
            setMessage('Updated user...');
            setAddress('');
        } catch (err) {
            setColor('red');
            setMessage(err.response.data.error);
            console.log(err);
        }
        setShow(true);
        setInterval(() => {
            setShow(false);
        }, 3000);
        fetchUserData();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="contact">{t('contact')}</label>
                    <input
                        value={contact}
                        type="text"
                        placeholder="+994"
                        id="contact"
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">{t('email')}</label>
                    <input
                        readOnly
                        value={email}
                        type="email"
                        placeholder={t('emailplaceholder')}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="username">{t('username')}</label>
                    <input
                        value={username}
                        type="text"
                        placeholder={t('placeholderusername')}
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">{t('address')}</label>
                    <input
                        value={address}
                        type="text"
                        placeholder={`${t('baku')}, ${t('azerbaijan')}`}
                        id="address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="fullname">{t('fullname')}</label>
                    <input
                        value={fullname}
                        type="text"
                        placeholder={t('fullnameplaceholder')}
                        id="fullname"
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div className={styles.saveButton}>
                    <button type="submit">{t('save')}</button>
                </div>
            </form>

            <Notification message={message} color={color} show={show} />
        </div>
    );
}

export default Profile;
