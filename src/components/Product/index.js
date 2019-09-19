import React from 'react';
import './index.css';

const Product = ({name, price}) => (
    <div className="Product">
        <p className="ProductName">
            {name}
        </p>
        <p className="ProductPrice">
            {price}
        </p>
    </div>
);

export default Product;
