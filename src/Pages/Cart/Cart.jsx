import React from 'react'
import './Cart.css'
import { v4 as uuidv4 } from 'uuid'
import BestSellers from '../../Components/BestSellers/BestSellers'
import EmptyCartImg from '../../Assets/emptycart.png'
import PlusBtn from '../../Assets/plus-lg.svg'
import MinusBtn from '../../Assets/dash-lg.svg'
import DelBtn from '../../Assets/trash3.svg'

export default function Cart({ cart, minusItem, plusItem, addFunc, cartItemNum, cartTotalPrice, delItem, ProductList }) {

    return (
        <div className='cart-page'>
            <div className='cart-header'>
                <h2 className='cart-h2'>Cart</h2>
            </div>
            {cart.length > 0 &&
                <div className='cart-flex'>
                    <div className='cart-items-container'>
                        {cart.map(cartItem =>
                            <div className='cart-prod-card' key={uuidv4()}>
                                <img className='cart-prod-img' src={process.env.PUBLIC_URL + cartItem.imgSrc} alt="cake" />
                                <div className='cart-prod-container'>
                                    <p className='cart-prod-info'>{cartItem.prodTitle}</p>
                                    <p className='cart-prod-info'>{cartItem.totalPrice} $</p>
                                    <div>
                                        <div className='prod-btn-container'>
                                            <div className='cart-btns'>
                                                <img className='prod-qty-btn' onClick={() => minusItem(cartItem)} src={MinusBtn} alt="minus icon" />
                                                <p>{cartItem.totalprodQty}</p>
                                                <img className='prod-qty-btn' onClick={() => plusItem(cartItem)} src={PlusBtn} alt="plus icon" />
                                            </div>
                                            <img className='del-btn' onClick={() => delItem(cartItem)} src={DelBtn} alt="bin icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className='sum-container'>
                        <div className='cart-sum'>
                            <p className='subtotal-text'>Subtotal ({cartItemNum} {cartItemNum === 1 ? <>item</> : <>items</>}):</p>
                            <p className='subtotal-price'>{cartTotalPrice} $</p>
                        </div>
                        <button className='checkout-btn'>Proceed to Checkout</button>
                    </div>
                </div>
            }
            {cart.length === 0 &&
                <div className='empty-cart-container'>
                    <img src={EmptyCartImg} alt="" />
                    <p className='empty-cart'>Your cart is empty, check out our fancy cakes.</p>
                </div>
            }
            <section className='best-sellers-cart'>
                <div className='best-sellers-max-width '>
                    <BestSellers addFunc={addFunc} ProductList={ProductList} cart={cart} />
                </div>
            </section>
        </div >
    )
}
