import './reset.css'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './Pages/Products/ProductsPage'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'
import Recipe from './Pages/Recipe/Recipe'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import ProductList from './Products.json'
import Checkout from './Pages/Checkout/Checkout'

function App() {

  const [cartItemNum, setcartItemNum] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart')) || [])

  useEffect(() => {
    setcartItemNum(cart.reduce((acc, curr) => acc + curr.totalprodQty, 0))
    setCartTotalPrice(cart.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(1))
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  function clearCart(){
    setCart([])
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  function addOrRemoveFromCart(array, prodToFind, quantity) {
    let idx = array.findIndex((item) => item.prodTitle === prodToFind.prodTitle)
    if (quantity > 0) {
      array[idx].totalprodQty++
    }
    else if (quantity === 0) {
      array[idx].totalprodQty--
    }
    else {
      array[idx].totalprodQty = 0
      array.splice(idx, 1)
      return setCart([...array])
    }
    array[idx].totalPrice = parseFloat((array[idx].totalprodQty * array[idx].prodPrice).toFixed(1))
    setCart([...array])
  }

  function addFunc(prod) {
    let cartArray = [...cart]
    cartArray.push(prod)
    addOrRemoveFromCart(cartArray, prod, 1)
    setCart(cartArray)
  }

  function minusItem(cartItem) {
    if (cartItem.totalprodQty > 1) {
      let cartArray = [...cart]
      addOrRemoveFromCart(cartArray, cartItem, 0)
      setCart(cartArray)
    }
  }

  function plusItem(cartItem) {
    if (cartItem.totalprodQty < 10) {
      let cartArray = [...cart]
      addOrRemoveFromCart(cartArray, cartItem, 1)
      setCart(cartArray)
    }
  }

  function delItem(cartItem) {
    let cartArray = [...cart]
    addOrRemoveFromCart(cartArray, cartItem, -1)
    setCart(cartArray)
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header cartItemNum={cartItemNum} />
        <Routes>
          <Route exact path='/' element={<Home addFunc={addFunc} ProductList={ProductList} cart={cart} />} />
          <Route path='/products' element={<ProductsPage addFunc={addFunc} ProductList={ProductList} cart={cart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} minusItem={minusItem} plusItem={plusItem}
            addFunc={addFunc} cartItemNum={cartItemNum} cartTotalPrice={cartTotalPrice} delItem={delItem} ProductList={ProductList} />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/checkout' element={<Checkout cart={cart} cartItemNum={cartItemNum} cartTotalPrice={cartTotalPrice} clearCart={clearCart}/>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
