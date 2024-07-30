import styles from '../styles/Faq.module.css';

import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';

const faqList = [
    {
        question: 'How to contact with Customer Service?',
        answer: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact: Email and Chat. We try to reply quickly, so you need not wait too long for a response!',
    },
    {
        question: 'App installation failed, how to update system information?',
        answer: "Ensure your system meets the app's requirements and update your operating system and drivers. Check the app's documentation for any specific needs. Try reinstalling the app after these updates.",
    },
    {
        question: 'Website response taking time, how to improve?',
        answer: 'Optimize images and scripts, use a content delivery network (CDN), and implement caching strategies. These steps reduce load times and improve performance. Also, consider optimizing your database queries.',
    },
    {
        question: 'How do I create an account?',
        answer: "Click 'Sign Up' on the homepage and fill out the required fields, including your name, email, and password. Confirm your email by clicking the link sent to your inbox. Follow any additional steps to complete the setup.",
    },
    {
        question: 'How can I reset my password?',
        answer: "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and you will receive a link to reset your password. Follow the instructions in the email to create a new password.",
    },
];

const faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Layout>
            <motion.div
                initial={{ scaleX: 0.3 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className={styles.container}
            >
                <h1>F.A.Q</h1>
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
        </Layout>
    );
};

export default faqs;
