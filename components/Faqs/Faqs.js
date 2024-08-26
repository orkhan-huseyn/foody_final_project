import styles from './Faqs.module.css';

import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { t } = useTranslation();

    const faqList = [
        {
            question: t('faqquestion1'),
            answer: t('faqanswer1'),
        },
        {
            question: t('faqquestion2'),
            answer: t('faqanswer2'),
        },
        {
            question: t('faqquestion3'),
            answer: t('faqanswer3'),
        },
        {
            question: t('faqquestion4'),
            answer: t('faqanswer4'),
        },
        {
            question: t('faqquestion5'),
            answer: t('faqanswer5'),
        },
    ];
    return (
        <motion.div
            initial={{ scaleX: 0.3 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className={styles.container}
        >
            <h1>{t('faqtitle')}</h1>
            {faqList.map((faq, index) => (
                <div key={index}>
                    <div
                        className={`${styles.faq} ${
                            activeIndex === index ? styles.active : ''
                        }`}
                    >
                        <h3 className={styles.faqTitle}>{faq.question}</h3>
                        <p className={styles.faqText}>{faq.answer}</p>
                        <button
                            className={styles.faqToggle}
                            onClick={() => toggleFaq(index)}
                        >
                            <FaMinus className={styles.minus} />
                            <FaPlus className={styles.plus} />
                        </button>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default Faqs;
