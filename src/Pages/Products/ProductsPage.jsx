import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../Products.json'
import wave from '../../Assets/wave.svg'
import './ProductsPage.css'
import arrowIcon from '../../Assets/arrow-down.svg'
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function ProductsPage({ addFunc }) {

    const [selected, setSelected] = useState('Price: Low to high')
    const [page, setPage] = useState(1)
    const [chunkSize, setChunkSize] = useState(8)
    const [showList, setShowList] = useState(false)
    const [arrowClass, setArrowClass] = useState('')
    const [sortList, setSortList] = useState(false)
    const [arrowClassInSorting, setarrowClassInSorting] = useState('')
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

    function prodsSortingSelect() {
        setSortList(!sortList)
        setShowList(false)
        setarrowClassInSorting(sortList ? '' : 'rotated')
    }

    function sortingBtn(e) {
        setSelected(e.target.innerText)
    }

    function prodsNumOnPageSelect() {
        setShowList(!showList)
        setSortList(false)
        setArrowClass(showList ? '' : 'rotated')
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

    function selectShowNum(e) {
        setChunkSize(e.target.innerText)
        prodsNumOnPageSelect()
        setPage(1)
    }

    return (
        <div className='products-page'>
            <div className='products-cover-container'>
                <img className='products-page-cover' src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <h2 className='prod-h2'>Products</h2>
                <img className='wave' src={wave} alt="" />
            </div>
            <div className='prods-max-width'>
                <div className='select-main-container'>
                    <div className='prods-display-select'>
                        <button className='select-btn prods-num-btn' onClick={prodsNumOnPageSelect}>Show: {chunkSize}
                            <img className={`sorting-arrow ${arrowClass}`} src={arrowIcon} alt="" />
                        </button>
                        {showList && (
                            <ul className='show-prods-num-ul'>
                                <li className='show-prods-num' onClick={(e) => { selectShowNum(e) }}>8</li>
                                <li className='show-prods-num' onClick={(e) => { selectShowNum(e) }}>16</li>
                                <li className='show-prods-num' onClick={(e) => { selectShowNum(e) }}>32</li>
                            </ul>
                        )}
                    </div>
                    <div className='custom-select' >
                        <button className='select-btn' onClick={prodsSortingSelect}>
                            Sort by:<p className='sortby-text'>{selected}</p>
                            <img className={`sorting-arrow ${arrowClassInSorting}`} src={arrowIcon} alt="" />
                        </button>
                        {sortList && (
                            <ul className={`products-sorting`}>
                                <li onClick={(e) => { prodsSortingSelect(); sortingBtn(e) }} className='sorting-mode'>Price: Low to high</li>
                                <li onClick={(e) => { prodsSortingSelect(); sortingBtn(e) }} className='sorting-mode'>Price: High to low</li>
                                <li onClick={(e) => { prodsSortingSelect(); sortingBtn(e) }} className='sorting-mode'>A-Z</li>
                            </ul>
                        )}
                    </div>
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
                        {createArray(Math.ceil(sortingRender.length / chunkSize)).map(i =>
                            <li onClick={() => setPage(i)}
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
