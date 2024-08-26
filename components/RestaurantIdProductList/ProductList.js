import styles from './ProductList.module.css';

import pizza from '../../assets/images/restaurant-id/pizza.svg';
import poper from '../../assets/images/restaurant-id/poper.svg';
import cola from '../../assets/images/restaurant-id/cola.svg';
import coffe from '../../assets/images/restaurant-id/coffe.svg';

import ProductDetails from '../RestaurantIdProductDetails/ProductDetails';

import { IoBasketOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const details = [
    {
        src: pizza.src,
        title: 'Papa John’s Pizza Restaurant',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$7.90',
    },
    {
        src: pizza.src,
        title: 'Papa John’s Pizza Restaurant',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$7.90',
    },
    {
        src: pizza.src,
        title: 'Papa John’s Pizza Restaurant',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$7.90',
    },

    {
        src: poper.src,
        title: 'Papa J ohn’s Poper Roll',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$4.20',
    },
    {
        src: poper.src,
        title: 'Papa J ohn’s Poper Roll',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$7.90',
    },

    {
        src: cola.src,
        title: 'Coca Cola',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$1.90',
    },
    {
        src: coffe.src,
        title: 'Papa Coffe',
        desc: 'Prepared with a patty, a slice of cheese and special sauce',
        price: '$4.00',
    },
];

function ProductsList({ handleShowBasket }) {
    const { t } = useTranslation();
    return (
        <div className={styles.productsContainer}>
            <h3>{t('products')}</h3>
            {details.map((detail, index) => {
                return <ProductDetails key={index} detail={detail} />;
            })}
            <div className={styles.itemsBtn}>
                <button onClick={handleShowBasket} className={styles.button}>
                    <span>
                        <IoBasketOutline size={'24px'} /> 3 {t('items')}
                    </span>
                    <span className={styles.price}>$37.40</span>
                </button>
            </div>
        </div>
    );
}

export default ProductsList;
