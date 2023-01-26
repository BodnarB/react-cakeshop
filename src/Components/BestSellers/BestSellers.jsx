import React from 'react'
import './BestSellers.css'
import ProductList from '../../Products.json'
import ProductCard from '../ProductCard/ProductCard'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function BestSellers({ addFunc }) {
    return (
        <section className='best-sellers'>
            <h2>Best seller products</h2>
            <div className='best-sellers-prods'>
                {ProductList.slice(2, 6).map(prod => <ProductCard prod={prod} addFunc={addFunc} key={uuidv4()} />)}
            </div>
            <Link></Link>
        </section>
    )
}
