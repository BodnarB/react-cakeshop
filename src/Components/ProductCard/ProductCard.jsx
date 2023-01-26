import React from 'react';
import './ProductCard.css'

export default function ProductCard({ prod, addFunc }) {
    return (
        <div className='prod-card'>
            <img className='prod-img' src={prod.imgSrc} alt="" />
            <div className='prod-card-container'>
                <div className='prod-info'>
                    <p>{prod.prodTitle}</p>
                    <p>{prod.prodPrice} $</p>
                </div>
                <button className='prod-add-btn' disabled={prod.totalprodQty > 0}
                    onClick={() => { addFunc(prod) }}>
                    {prod.totalprodQty > 0 ? <>Added to cart</> : <>Add to cart</>}
                </button>
            </div>
        </div>
    )
}