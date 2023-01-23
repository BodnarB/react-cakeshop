import React from 'react'
import Products from '../../Components/Products/Products'

export default function Home({addFunc}) {

  return (
    <div>
        <Products addFunc={addFunc}/>
    </div>
  )
}
