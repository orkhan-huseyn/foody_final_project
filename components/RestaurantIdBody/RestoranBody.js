import styles from './RestoranBody.module.css';

import ProductsList from '../RestaurantIdProductList/ProductList';
import Basket from '../Basket/Basket';
import EmptyBasket from '../EmptyBasket/EmptyBasket';

function RestoranBody({ showBasket, handleShowBasket, setShowBasket }) {
    return (
        <div className={styles.container}>
            <ProductsList handleShowBasket={handleShowBasket} />
            <EmptyBasket showBasket={showBasket} setShowBasket={setShowBasket} />
            {/* <Basket showBasket={showBasket} setShowBasket={setShowBasket} /> */}
        </div>
    );
}

export default RestoranBody;
