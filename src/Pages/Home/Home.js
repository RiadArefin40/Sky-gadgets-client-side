import React from 'react';
import Banner from './Banner/Banner';
import BestSelling from './BestSelling/BestSelling';
import InventoryItems from './InventoryItems/InventoryItems';
import Location from './Location/Location';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <InventoryItems></InventoryItems>
            <BestSelling></BestSelling>
            <Location></Location>
        </div>
    );
};

export default Home;