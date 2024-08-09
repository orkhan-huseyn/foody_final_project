import { useState } from 'react';

import PapaJohnsHero from '../RestaurantIdHero/RestoranIdHero';
import RestoranBody from '../RestaurantIdBody/RestoranBody';

function RestoranId() {
    const [showBasket, setShowBasket] = useState(false);

    const handleShowBasket = () => {
        setShowBasket(!showBasket);
    };

    return (
        <div>
            <PapaJohnsHero />
            <RestoranBody
                showBasket={showBasket}
                setShowBasket={setShowBasket}
                handleShowBasket={handleShowBasket}
            />
        </div>
    );
}

export default RestoranId;
