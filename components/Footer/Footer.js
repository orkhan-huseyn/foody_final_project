import styles from './Footer.module.css';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socialMedia}>
                    <h2>
                        Foody<span className={styles.dot}>.</span>
                    </h2>
                    <p>
                        {' '}
                        Lorem ipsum is placeholder <br /> text commonly used in
                        the graphic.
                    </p>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </div>
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.column}>
                        <h3>{t('popular')}</h3>
                        <ul>
                            <li>
                                <a href="/">{t('programming')}</a>
                            </li>
                            <li>
                                <a href="/">{t('booksforchildren')}</a>
                            </li>
                            <li>
                                <a href="/">{t('psychology')}</a>
                            </li>
                            <li>
                                <a href="/">{t('business')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('cash')}</h3>
                        <ul>
                            <li>
                                <a href="/">{t('deliverylink')}</a>
                            </li>
                            <li>
                                <a href="/"> {t('payment')}</a>
                            </li>
                            <li>
                                <a href="/">{t('aboutthestore')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('help')}</h3>
                        <ul>
                            <li>
                                <a href="/">{t('contacts')}</a>
                            </li>
                            <li>
                                <a href="/">{t('purchasereturns')}</a>
                            </li>
                            <li>
                                <a href="/">{t('buyerhelp')}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>
                {t('copyright')} <span>Foody</span>
            </p>
        </footer>
    );
};

export default Footer;
