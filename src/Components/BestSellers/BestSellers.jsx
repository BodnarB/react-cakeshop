import React from 'react'
import './BestSellers.css'
import ProductList from '../../Products.json'
import ProductCard from '../ProductCard/ProductCard'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import Arrow from '../../Assets/arrows.svg'


export default function BestSellers({ addFunc }) {
    return (
        <div className='best-sellers'>
            <h2>Best seller products</h2>
            <div className='best-sellers-prods'>
                {ProductList.slice(2, 6).map(prod => <ProductCard prod={prod} addFunc={addFunc} key={uuidv4()} />)}
            </div>
            <Link className='btn-a' to='/products'><button className='all-prods-btn'>All products <img className='arrow-icon' src={Arrow} alt="" /></button></Link>
        </div>
    )
}
