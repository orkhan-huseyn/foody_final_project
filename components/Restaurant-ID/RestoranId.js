import { useState, useEffect } from 'react';

import PapaJohnsHero from '../RestaurantIdHero/RestoranIdHero';
import RestoranBody from '../RestaurantIdBody/RestoranBody';
import LoadingIcon from '../Loading/Loading';
import api from '../../api';

function RestoranId({ id }) {
    const [showBasket, setShowBasket] = useState(false);
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleShowBasket = () => {
        setShowBasket(!showBasket);
    };

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await api.get(`/restaurants/${id}`);
                setRestaurant(response.data.result);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchRestaurant();
    }, [id]);

    if (loading) return <LoadingIcon />;

    return (
        <div>
            <PapaJohnsHero restaurant={restaurant} />
            <RestoranBody
                showBasket={showBasket}
                setShowBasket={setShowBasket}
                handleShowBasket={handleShowBasket}
                restaurant={restaurant}
            />
        </div>
    );
}

export default RestoranId;
