import styles from './EmptyBasket.module.css';

import Link from 'next/link';

import { IoBasketOutline } from 'react-icons/io5';
import { SlClose } from 'react-icons/sl';

import EmptyBasketSvg from '../../assets/images/restaurant-id/emptybasket.svg';
import RedEmptyBasketSvg from '../../assets/images/restaurant-id/redemptybasket.svg';

function EmptyBasket({ showBasket, setShowBasket }) {
    function handleCloseBasket() {
        setShowBasket(false);
    }

    return (
        <>
            <div
                className={`${styles.overlay} ${
                    showBasket ? styles.active : ''
                }`}
            ></div>

            <div className={styles.container}>
                <div className={styles.closeBasketBtn}>
                    <button onClick={handleCloseBasket}>
                        <SlClose size={'28px'} />
                    </button>
                </div>
                <div className={styles.items}>
                    <span>
                        <span>
                            <IoBasketOutline size={'24px'} /> 0 Items
                        </span>
                    </span>
                </div>
                <div className={styles.emptyBasketSvg}>
                    <img src={EmptyBasketSvg.src} alt="Empty basket photo" />
                    <img src={RedEmptyBasketSvg.src} alt="Empty basket photo" />
                </div>
                <div className={styles.text}>
                    <span>Opps!</span>
                    <span>Basket empty</span>
                </div>
                <div className={styles.emptyBtn}>
                    <button className={styles.button}>
                        Checkout
                        <span className={styles.price}>$0.00</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default EmptyBasket;
