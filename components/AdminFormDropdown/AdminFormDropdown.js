import styles from './AdminFormDropdown.module.css';

import { useState } from 'react';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

function AdminFormDropdown({ dropdownOptions, setId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option.name);
        setIsOpen(false);
        setId(option.id);
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
                    {dropdownOptions.map((option, i) => (
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

export default AdminFormDropdown;
