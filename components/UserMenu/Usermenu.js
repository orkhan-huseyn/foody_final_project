import style from './Usermenu.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../api';

function Usermenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [letter, setLetter] = useState('');
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/client/login');
    };

    const fetchUserData = async () => {
        try {
            const response = await api.get('/auth/user');
            const userData = response.data.user;
            setFullName(userData.fullname);
            setLetter(getLetter(userData.fullname));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    function getLetter(fullName) {
        if (!fullName) return '';
        const nameParts = fullName.split(' ');
        const letter = nameParts.map((part) => part.charAt(0).toUpperCase());
        return letter.join('');
    }

    return (
        <div className={style.usermenu}>
            <button onClick={toggleDropdown} className={style.button}>
                {letter || 'user'}
            </button>
            {isOpen && (
                <div className={style.dropdown}>
                    <Link href="/client/profile" className={style.dropdownLink}>
                        Profile
                    </Link>
                    <Link href="/client/basket" className={style.dropdownLink}>
                        Your Basket
                    </Link>
                    <Link href="/client/orders" className={style.dropdownLink}>
                        Your Orders
                    </Link>
                    <Link
                        href="/client/checkout"
                        className={style.dropdownLink}
                    >
                        Checkout
                    </Link>
                    <button
                        onClick={handleLogout}
                        className={style.dropdownLink}
                        style={{ fontSize: '16px' }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Usermenu;
