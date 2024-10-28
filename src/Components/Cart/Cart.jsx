import React from 'react';
import './Cart.css';

const Cart = ({cartItems}) => {
    let quantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    for(let item of cartItems){
        totalPrice = totalPrice + item.price * item.quantity;
        shipping = shipping + item.shipping;
        quantity = quantity + item.quantity;
        console.log(quantity)
    }
    const tax = totalPrice*10/100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h1>Cart</h1>
            <h2>Item Selected:{quantity}</h2>
            <p>Total Price: ${totalPrice}</p>
            <p>Tax: ${tax}</p>
            <p>Shipping Cost: ${shipping}</p>
            <hr/>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;