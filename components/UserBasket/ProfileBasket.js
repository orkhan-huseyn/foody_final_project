import styles from './ProfileBasket.module.css';

import BasketDetails from 'components/BasketDetails/BasketDetails';

import { IoBasketOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import pizza from '../../assets/images/restaurant-id/pizza.svg';
import coffe from '../../assets/images/restaurant-id/coffe.svg';
import poper from '../../assets/images/restaurant-id/poper.svg';

const details = [
    {
        name: 'Papa John’s Pizza Restaurant',
        price: 15.8,
        src: pizza.src,
    },
    {
        name: 'KFC',
        price: 7.8,
        src: coffe.src,
    },
    {
        name: 'McDonalds',
        price: 18.8,
        src: poper.src,
    },
    {
        name: 'Papa John’s Pizza Restaurant',
        price: 15.8,
        src: pizza.src,
    },
    {
        name: 'KFC',
        price: 7.8,
        src: coffe.src,
    },
    {
        name: 'McDonalds',
        price: 18.8,
        src: poper.src,
    },
];

function ProfileBasket() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{t('yourbasket')}</h4>
            <span className={styles.items}>
                <IoBasketOutline
                    style={{ color: '#D63626', fontSize: '22px' }}
                />{' '}
                3 {t('items')}
            </span>
            <div>
                {details.map((detail, i) => {
                    return <BasketDetails key={i} detail={detail} />;
                })}
            </div>
        </div>
    );
}

export default ProfileBasket;
