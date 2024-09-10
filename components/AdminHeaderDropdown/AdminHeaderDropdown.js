import styles from './AdminHeaderDropdown.module.css';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

function AdminHeaderDropdown({ dropdownOptions, setRestaurants, restaurants }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an option');
    const [selectedId, setSelectedId] = useState('');
    const [originalRestaurants, setOriginalRestaurants] = useState([]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (restaurants?.length && !originalRestaurants.length) {
            setOriginalRestaurants(restaurants);
        }
    }, [originalRestaurants, restaurants]);

    useEffect(() => {
        if (selectedId === '') {
            setRestaurants(originalRestaurants);
        } else if (originalRestaurants.length) {
            const filteredRestaurants = originalRestaurants.filter(
                (restaurant) => selectedId === restaurant.category_id
            );
            setRestaurants(filteredRestaurants);
        }
    }, [selectedId, originalRestaurants, setRestaurants]);

    const handleOptionClick = (option) => {
        setSelectedOption(option.name);
        setSelectedId(option.id || '');
        setIsOpen(false);
    };


    const optionsWithAll = [{ name: 'All', id: '' }, ...dropdownOptions];

    return (
        <div className={styles.dropdownContainer}>
            <button onClick={toggleDropdown} className={styles.toggleBtn}>
                {selectedOption}{' '}
                {isOpen ? (
                    <MdKeyboardArrowUp className={styles.arrow} />
                ) : (
                    <MdKeyboardArrowDown className={styles.arrow} />
                )}
            </button>

            {isOpen && (
                <ul className={styles.dropdownItems}>
                    {optionsWithAll.map((option, i) => (
                        <li
                            key={i}
                            className={styles.item}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminHeaderDropdown;
