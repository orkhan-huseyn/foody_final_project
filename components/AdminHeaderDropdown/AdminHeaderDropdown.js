import styles from './AdminHeaderDropdown.module.css';

import { useState } from 'react';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const options = [
    {
        text: 'Restaurant 1',
    },
    {
        text: 'Restaurant 2',
    },
    {
        text: 'Restaurant 3',
    },
];

function AdminHeaderDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an option');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

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
                    {options.map((option, i) => (
                        <li
                            key={i}
                            className={styles.item}
                            onClick={() => handleOptionClick(option.text)}
                        >
                            {option.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminHeaderDropdown;
