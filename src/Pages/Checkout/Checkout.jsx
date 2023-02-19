import React, { useState } from 'react'
import './Checkout.css'
import { v4 as uuidv4 } from 'uuid'

export default function Checkout({ cart, cartTotalPrice }) {

    const [order, setOrder] = useState(false)

    function formSubmit(e) {
        console.log(cart)
        setOrder(true)
        e.preventDefault()
    }

    return (
        <div>
            <p>Checkout</p>
            <p>Order number: {uuidv4()}</p>
            <p>Total price : {cartTotalPrice} $</p>
            <form action="#" method='post'>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' name='name' required />
                <button onClick={formSubmit} disabled={order} className='order-btn'>{order ? "Ordered" : "Order"}</button>
            </form>
        </div>
    )
}
