import styles from './AdminFormDropdown.module.css';

import { useState } from 'react';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const options = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3'];

function AdminFormDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.dropdownContainer}>
            <button
                type="button"
                onClick={toggleDropdown}
                className={styles.toggleBtn}
            >
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
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminFormDropdown;
