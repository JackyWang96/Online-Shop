import './cart-dropdown.style.scss';
import React from "react";
import Button from "../button/button.component";
import CartItem from '../cart-item.component/cart-item.component';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () =>{
        navigate('/checkout');
        console.log('yes')

    }
    return(
    <div className='cart-dropdown-container'>
        <div className='cart-item'/>
        {cartItems.map((item) => (
            <CartItem key={item.id}cartItem={item}/>))}
        <Button onClick={goToCheckoutHandler}>Go To Check Out</Button>
    </div>
    )
};


export default CartDropdown;