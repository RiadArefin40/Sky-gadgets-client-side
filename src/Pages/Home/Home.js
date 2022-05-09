import React from 'react';
import Banner from './Banner/Banner';
import BestSelling from './BestSelling/BestSelling';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <InventoryItems></InventoryItems>
            <BestSelling></BestSelling>
        </div>
    );
};

export default Home;