import styles from './Basket.module.css';

import Link from 'next/link';

import { IoBasketOutline } from 'react-icons/io5';
import { SlClose } from 'react-icons/sl';

import pizza from '../../assets/images/restaurant-id/pizza.svg';
import BasketDetails from '../BasketDetails/BasketDetails';

const details = [
    {
        name: 'Papa John’s Pizza Restaurant',
        price: 15.8,
        src: pizza.src,
    },
    {
        name: 'KFC',
        price: 7.8,
        src: pizza.src,
    },
    {
        name: 'McDonalds',
        price: 18.8,
        src: pizza.src,
    },
    {
        name: 'McDonalds',
        price: 18.8,
        src: pizza.src,
    },
    {
        name: 'McDonalds',
        price: 18.8,
        src: pizza.src,
    },
];

function Basket({ showBasket, setShowBasket }) {
    function handleShowBasket() {
        setShowBasket(false);
    }

    return (
        <>
            <div
                className={`${styles.overlay} ${
                    showBasket ? styles.active : ''
                }`}
            ></div>

            <div className={styles.basketContainer}>
                <div className={styles.basketHeader}>
                    <button
                        onClick={handleShowBasket}
                        className={styles.closeBasketBtn}
                    >
                        <SlClose />
                    </button>
                </div>

                <div className={styles.basketIcon}>
                    <IoBasketOutline
                        style={{ color: '#D63626', fontSize: '22px' }}
                    />
                    <span>3 Items</span>
                </div>

                <div className={styles.basketProducts}>
                    {details.map((detail, i) => {
                        return <BasketDetails key={i} detail={detail} />;
                    })}
                </div>
                <div className={styles.checkoutBtn}>
                    <Link href="/client/checkout" className={styles.button}>
                        Checkout
                        <span className={styles.price}>$37.40</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Basket;
