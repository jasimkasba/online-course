import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart

    const totalPrice = cart.reduce((total, subject) => total + subject.price, 0);
    return (
        <div className="p-5 cart-div">
           <div className="order-summary">
           <h4 className="text-center ">Order Summary</h4>
            <h5>Total Enroll: {cart.length}</h5>
            <h5>Total Price:$ {(totalPrice).toFixed(2)}</h5>
            <button className="btn btn-primary">Payment</button>

            
           </div>

        </div>



    );
};

export default Cart;