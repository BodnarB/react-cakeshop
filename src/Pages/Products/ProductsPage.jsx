import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../Products.json'
import wave from '../../Assets/wave.svg'
import './ProductsPage.css'
import arrowIcon from '../../Assets/arrow-down.svg'
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function ProductsPage({ addFunc }) {

    const [selected, setSelected] = useState('Price: Low to high')
    const [showSelect, setShowSelect] = useState('hide')
    const [arrow, setArrow] = useState('')
    const [page, setPage] = useState(1)
    const chunkSize = 8;
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
        setArrow('')
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
        setSortingRender(sortingRendering)
    }, [selected])

    function createArray(number) {
        return new Array(number).fill().map(function (_, i) {
            return i + 1;
        });
    }

    function pageNumber(i) {
        setPage(i)

    }

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
                    {sortingRender.slice((page - 1) * chunkSize, page * chunkSize).map(prod =>
                        <ProductCard prod={prod} addFunc={addFunc} key={uuidv4()} />)}
                </div>
                <div className='page-select'>
                    <button onClick={() => setPage(page - 1)} className='page-arrow arrow-left' disabled={page === 1}>
                        <img src={arrowIcon} alt="" />
                    </button>
                    <ul className='page-nums'>
                        {createArray(Math.ceil(sortingRender.length / 8)).map(i =>
                            <li onClick={() => pageNumber(i)}
                                className={`page-number ${i === page ? 'selected-page' : ''}`}
                                key={i}>{i}</li>)}
                    </ul>
                    <button onClick={() => setPage(page + 1)} className='page-arrow arrow-right'
                        disabled={page === Math.ceil(sortingRender.length / chunkSize)}>
                        <img src={arrowIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
