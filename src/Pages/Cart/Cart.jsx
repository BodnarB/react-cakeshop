import React from 'react'
import './Cart.css'
import { v4 as uuidv4 } from 'uuid';
import EmptyCartImg from '../../Assets/emptycart.png'
import PlusBtn from '../../Assets/plus-lg.svg'
import MinusBtn from '../../Assets/dash-lg.svg'
import DelBtn from '../../Assets/trash3.svg'

export default function Cart({ cart }) {
    console.log(cart)
    return (
        <div className='cart-page'>
            <h2 className='cart-h2'>Cart</h2>
            <div className='cart-items-container'>
                {cart.map(cart =>
                    <div className='cart-prod-card' key={uuidv4()}>
                        <img className='cart-prod-img' src={cart.imgSrc} alt="" />
                        <div className='cart-prod-container'>
                            <div className='cart-prod-info'>
                                <p>{cart.prodTitle}</p>
                                <p>{cart.prodPrice} $</p>
                            </div>
                            <div className='prod-btn-container'>
                                <div className='cart-btns'>
                                    <img className='prod-qty-btn' src={MinusBtn} alt="" />
                                    <p>{cart.prodQty}</p>
                                    <img className='prod-qty-btn' src={PlusBtn} alt="" />
                                </div>
                                <img src={DelBtn} alt="" />
                            </div>
                            {/* <button className='prod-add-btn' disabled={prod.prodQty > 0}
                                    onClick={() => {
                                        prod.prodQty += 1
                                        addFunc(prod)
                                    }}>
                                    {prod.prodQty > 0 ? <>Added to cart</> : <>Add to cart</>}
                                </button> */}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
