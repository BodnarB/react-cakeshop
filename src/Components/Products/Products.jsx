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
                        <p>{prod.prodTitle}</p>
                        <p>{prod.prodPrice} $</p>
                        <p>{prod.added}</p>
                        <button
                            className='prod-add-btn'
                            disabled={prod.added}
                            onClick={() => {
                                prod.added = true;
                                prod.prodQty += 1
                                addFunc(prod)
                            }}>
                            {prod.added === true ? <>Added to cart</> : <>Add to cart</>}
                        </button>
                    </div>
                </div>)}
        </div>
    )
}
