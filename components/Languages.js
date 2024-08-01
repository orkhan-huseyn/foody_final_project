import styles from '../styles/Languages.module.css';
import { useState } from 'react';

import az from '../assets/images/flags/az.svg';
import uk from '../assets/images/flags/uk.svg';
import france from '../assets/images/flags/france.svg';

const flags = [
    {
        src: az.src,
        code: 'az',
    },
    {
        src: uk.src,
        code: 'uk',
    },
    {
        src: france.src,
        code: 'fr',
    },
];

function Languages() {
    const [showOptions, setShowOptions] = useState(false);
    const [flag, setFlag] = useState(flags[1]);

    function handleShowOptions() {
        setShowOptions(!showOptions);
    }

    function updateFlag(selectedFlag) {
        setFlag(selectedFlag);
    }

    function handleFlagSelection(selectedFlag) {
        setShowOptions(false);
        updateFlag(selectedFlag);
    }

    return (
        <div className={styles.languageIconContainer}>
            <button onClick={handleShowOptions}>
                <img src={flag.src} alt={`${flag.code} Flag`} />
            </button>

            <div
                className={`${styles.languageOptions} ${
                    showOptions ? styles.active : ''
                }`}
            >
                {flags.map((flagOption) => (
                    <button
                        key={flagOption.code}
                        onClick={() => handleFlagSelection(flagOption)}
                    >
                        <img
                            src={flagOption.src}
                            alt={`${flagOption.code} Flag`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Languages;
