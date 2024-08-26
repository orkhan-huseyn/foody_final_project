import styles from './Languages.module.css';

import { useState } from 'react';
import i18n from '../../i18n';

import az from '../../assets/images/flags/az.svg';
import uk from '../../assets/images/flags/uk.svg';

const flags = [
    {
        src: az.src,
        code: 'az',
    },
    {
        src: uk.src,
        code: 'en',
    },
];

function Languages({ backgroundColor }) {
    const [showOptions, setShowOptions] = useState(false);
    const [flag, setFlag] = useState(flags[1]);

    function handleShowOptions() {
        setShowOptions(!showOptions);
    }

    function updateFlag(selectedFlag) {
        setFlag(selectedFlag);
    }

    async function handleLanguageSelection(flagOption) {
        await i18n.changeLanguage(flagOption.code);
        setShowOptions(false);
        updateFlag(flagOption);
    }

    return (
        <div className={styles.languageIconContainer}>
            <button onClick={handleShowOptions} className={styles.mainBtn}>
                <img src={flag.src} alt={`${flag.code} Flag`} />
            </button>

            <div
                style={{ backgroundColor: `${backgroundColor}` }}
                className={`${styles.languageOptions} ${
                    showOptions ? styles.active : ''
                }`}
            >
                {flags.map((flagOption) => (
                    <button
                        key={flagOption.code}
                        onClick={() => handleLanguageSelection(flagOption)}
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
