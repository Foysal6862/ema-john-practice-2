import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    const total = cart.reduce((total, product) => total + product.price, 0); 
    let shipping = 0;
    if (total> 35) {
        shipping = 0;
    }else if (total > 15) {
        shipping = 4.99;
    }else if (total > 0) {
        shipping = 12.99;
    }

    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const tax = formateNumber(total/10);
    const grandTotal = formateNumber(total + shipping + tax);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Odered: {cart.length}</p>
            <p>Product Price : {formateNumber(total)}</p>
            <p>Shipping Cost: {formateNumber(shipping)}</p>
            <p>Tax + VAT : {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;