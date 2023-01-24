import React from 'react'
import Products from '../../Components/Products/Products'
import wave from '../../Assets/wave.svg'
import './ProductsPage.css'

export default function ProductsPage({ addFunc }) {
    return (
        <div className='products-page'>
            <div className='products-cover-container'>
                <img className='products-page-cover' src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <h2 className='prod-h2'>Products</h2>
                <img className='wave' src={wave} alt="" />
            </div>
            <Products addFunc={addFunc} />
        </div>
    )
}
