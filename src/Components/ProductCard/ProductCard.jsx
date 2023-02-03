import React from 'react';
import './ProductCard.css'

export default function ProductCard({ prod, addFunc, cart }) {

    function disableBtn() {
        if (cart.length > 0) {
            let idx = cart.findIndex((item) => item.prodTitle === prod.prodTitle)
            return idx >= 0
        }
    }

    return (
        <div className='prod-card'>
            <img className='prod-img' src={process.env.PUBLIC_URL + prod.imgSrc} alt="" />
            <div className='prod-card-container'>
                <div className='prod-info'>
                    <p>{prod.prodTitle}</p>
                    <p>{prod.prodPrice} $</p>
                </div>
                <button className='prod-add-btn' disabled={disableBtn()}
                    onClick={() => { addFunc(prod); disableBtn() }}>
                    {disableBtn() ? <>Added to cart</> : <>Add to cart</>}
                </button>
            </div>
        </div>
    )
}