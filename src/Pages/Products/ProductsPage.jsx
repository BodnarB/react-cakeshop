import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../Products.json'
import wave from '../../Assets/wave.svg'
import './ProductsPage.css'
import arrowIcon from '../../Assets/arrow-down.svg'

export default function ProductsPage({ addFunc }) {

    const [selected, setSelected] = useState('Price: Low to high')
    const [showSelect, setShowSelect] = useState('hide')
    const [arrow, setArrow] = useState('')
    let ProductsAscending = [...ProductList].sort((a, b) => a.prodPrice - b.prodPrice)
    let ProductsDescending = [...ProductList].sort((a, b) => b.prodPrice - a.prodPrice)
    let ProductsAZ = [...ProductList].sort((a, b) => {
        if (a.prodTitle < b.prodTitle) {
            return -1
        }
        if (a.prodTitle > b.prodTitle) {
            return 1
        }
        return 0
    })
    const [sortingRender, setSortingRender] = useState(ProductsAscending)

    function selectMenu() {
        showSelect === '' ? setShowSelect('hide') : setShowSelect('')
        showSelect === 'hide' ? setArrow('turn-arrow') : setArrow('')
    }

    function setSelect(e) {
        setSelected(e.target.innerText)
        setShowSelect('hide')
    }

    useEffect(() => {
        let sortingRendering = ''
        if (selected === 'Price: Low to high') {
            sortingRendering = ProductsAscending
        }
        else if (selected === 'Price: High to low') {
            sortingRendering = ProductsDescending
        }
        else if (selected === 'A-Z') {
            sortingRendering = ProductsAZ
        }
        setArrow('')
        setSortingRender(sortingRendering)
    }, [selected])

    return (
        <div className='products-page'>
            <div className='products-cover-container'>
                <img className='products-page-cover' src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <h2 className='prod-h2'>Products</h2>
                <img className='wave' src={wave} alt="" />
            </div>
            <div className='prods-max-width'>
                <div className='custom-select' >
                    <button className='select-btn' onClick={selectMenu}>
                        Sort by:<p className='sortby-text'>{selected}</p>
                        <img className={`sorting-arrow ${arrow}`} src={arrowIcon} alt="" />
                    </button>
                    <ul className={`products-sorting ${showSelect}`}>
                        <li onClick={setSelect} className='sorting-mode'>Price: Low to high</li>
                        <li onClick={setSelect} className='sorting-mode'>Price: High to low</li>
                        <li onClick={setSelect} className='sorting-mode'>A-Z</li>
                    </ul>
                </div>
                <div className='prods-container'>
                    {sortingRender.map(prod =>
                        <div className='prod-card' key={uuidv4()}>
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
                        </div>)}
                </div>
            </div>
        </div>
    )
}
