import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum+country.population, 0)
    console.log(cart)
    return (
        <div>
            <h2>This is cart: {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;