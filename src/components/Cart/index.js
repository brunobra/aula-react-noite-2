import React from 'react';
import CartHeader from '../CartHeader';
import Product from '../Product';

const Cart = () => (
    <div>
        <CartHeader
            title="Carrinho"
            total={100}
        />
        <Product
            name="Produto1"
            price={100}
        />
    </div>
);

export default Cart;
