import React from 'react'
import './Checkout.css'
import { useForm } from '@formspree/react'


export default function Checkout({ cart, cartTotalPrice, clearCart }) {


    const [state, handleSubmit] = useForm("xayzoeby")
    const orderNumber = Math.floor((Math.random() * 10000) + 1000)

    if (state.succeeded) {
        return <p className='submit-res'>Thank you for your order, your product will be shipped soon!</p>
    }

    return (
        <div className='checkout-page'>
            <h4 className='checkout-h4'>Checkout</h4>
            <p>Order number: {orderNumber}</p>
            <p>Total price : {cartTotalPrice} $</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' name='name' required />
                <button type="submit" onClick={clearCart} disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}
