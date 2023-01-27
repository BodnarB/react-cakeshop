import './reset.css'
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/Products/ProductsPage';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';


function App() {

  const [cartItemNum, setcartItemNum] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [cart, setCart] = useState([])

  function calcCartQty(cartToCheck) {
    setcartItemNum(cartToCheck.reduce((acc, curr) => acc + curr.totalprodQty, 0))
    setCartTotalPrice(cartToCheck.reduce((acc, curr) => acc + curr.totalPrice, 0))
  }

  useEffect(() => {
    calcCartQty(cart)
  }, [cart])

  function addOrRemoveFromCart(array, prodToFind, quantity) {
    let idx = array.findIndex((item) => item.prodTitle === prodToFind.prodTitle)
    if (quantity > 0) {
      array[idx].totalprodQty++
    }
    else {
      array[idx].totalprodQty--
    }
    array[idx].totalPrice = array[idx].totalprodQty * array[idx].prodPrice
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

  return (
    <HashRouter>
      <div className="App">
        <Header cartItemNum={cartItemNum} />
        <Routes>
          <Route exact path='/' element={<Home addFunc={addFunc} />} />
          <Route path='/products' element={<ProductsPage addFunc={addFunc} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} minusItem={minusItem} plusItem={plusItem} 
          addFunc={addFunc} cartItemNum={cartItemNum} cartTotalPrice={cartTotalPrice}/>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
