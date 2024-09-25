import styles from './ProductList.module.css';

import ProductDetails from '../RestaurantIdProductDetails/ProductDetails';

import { IoBasketOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import api from '../../api';

function ProductsList({ handleShowBasket, restaurant }) {
    const { t } = useTranslation();
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/products');
            const result = response.data.result.data;
            const filteredData = result.filter(
                (data) => data.rest_id === restaurant.data.id
            );
            console.log(filteredData);
            setFilteredProducts(filteredData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (restaurant?.data?.id) {
            fetchProducts();
        }
    }, [restaurant]);

    return (
        <div className={styles.productsContainer}>
            <h3>{t('products')}</h3>
            {filteredProducts.map((product, index) => {
                return <ProductDetails key={index} product={product} />;
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
