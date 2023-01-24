import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../Products.json'
import './Products.css'




export default function Products({ addFunc }) {

    return (
        <div className='prods-container'>
            {ProductList.map(prod =>
                <div className='prod-card' key={uuidv4()}>
                    <p>{prod.prodTitle}</p>
                    <p>{prod.prodPrice} $</p>
                    <p>{prod.added}</p>
                    <button disabled={prod.added} onClick={() => {
                        prod.added = true;
                        addFunc(prod)
                    }}>
                        {prod.added === true ? <>Added to cart</> : <>Add to cart</>}
                    </button>
                </div>)}
        </div>
    )
}
