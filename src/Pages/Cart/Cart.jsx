import React from 'react'
import './Cart.css'
import { v4 as uuidv4 } from 'uuid';
import EmptyCartImg from '../../Assets/emptycart.png'
import PlusBtn from '../../Assets/plus-lg.svg'
import MinusBtn from '../../Assets/dash-lg.svg'
import DelBtn from '../../Assets/trash3.svg'

export default function Cart({ cart , minusItem, plusItem}) {

    return (
        <div className='cart-page'>
            <h2 className='cart-h2'>Cart</h2>
            <div className='cart-items-container'>
                {cart.map(cartItem =>
                    <div className='cart-prod-card' key={uuidv4()}>
                        <img className='cart-prod-img' src={cartItem.imgSrc} alt="" />
                        <div className='cart-prod-container'>
                            <p className='cart-prod-info'>{cartItem.prodTitle}</p>
                            <p className='cart-prod-info'>{cartItem.totalPrice} $</p>
                            <div>
                                <div className='prod-btn-container'>
                                    <div className='cart-btns'>
                                        <img className='prod-qty-btn' onClick={() => minusItem(cartItem)} src={MinusBtn} alt="" />
                                        <p>{cartItem.totalprodQty}</p>
                                        <img className='prod-qty-btn' onClick={() => plusItem(cartItem)} src={PlusBtn} alt="" />
                                    </div>
                                    <img src={DelBtn} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div >
        </div >
    )
}
