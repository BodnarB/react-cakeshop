import React from 'react'
import Products from '../../Components/Products/Products'

export default function ProductsPage({addFunc}) {
    return (
        <div>
            <Products addFunc={addFunc}/>
        </div>
    )
}
