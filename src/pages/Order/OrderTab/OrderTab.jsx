import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {item.map((item) => (
           <FoodCard key={item._id} item={item} />
         ))}
        </div>
    );
};

export default OrderTab;