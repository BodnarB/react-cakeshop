import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../Products.json'
import './Products.css'

export default function Products({ addFunc }) {

    return (
        <div className='prods-container'>
            {ProductList.map(prod =>
                <div className='prod-card' key={uuidv4()}>
                    <img className='prod-img' src={prod.imgSrc} alt="" />
                    <div className='prod-card-container'>
                        <div className='prod-info'>
                            <p>{prod.prodTitle}</p>
                            <p>{prod.prodPrice} $</p>
                        </div>
                        <button className='prod-add-btn' disabled={prod.prodQty > 0}
                            onClick={() => {
                                prod.prodQty += 1
                                addFunc(prod)
                            }}>
                            {prod.prodQty > 0 ? <>Added to cart</> : <>Add to cart</>}
                        </button>
                    </div>
                </div>)}
        </div>
    )
}
