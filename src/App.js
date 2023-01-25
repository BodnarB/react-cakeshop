import './reset.css'
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/Products/ProductsPage';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';


function App() {

  const [cartItemNum, setcartItemNum] = useState(0)
  const [cart, setCart] = useState([])

  function calcCartQty(cartToCheck) {
    setcartItemNum(cartToCheck.reduce((acc, curr) => acc + curr.totalprodQty, 0))
  }

  function findItem(array, prodToFind) {
    let idx=array.findIndex((item) => item.prodTitle === prodToFind.prodTitle)
    array[idx].totalprodQty++
    array[idx].totalPrice = array[idx].totalprodQty*array[idx].prodPrice
    console.log(cart)
  }

  function addFunc(prod) {
    let cartArray = [...cart]
    cartArray.push(prod)
    findItem(cartArray, prod)
    calcCartQty(cartArray)
    setCart(cartArray)
  }

  function minusItem(cartItem) {
    if (cartItem.totalprodQty > 1) {
      let cartArray = [...cart]
      cartArray[cartArray.findIndex((prod) => prod.prodTitle === cartItem.prodTitle)].totalprodQty -= 1
      setCart(cartArray)
      calcCartQty(cart)
    }
  }

  function plusItem(cartItem) {
    if (cartItem.totalprodQty < 10) {
      let cartArray = [...cart]
      findItem(cartArray, cartItem)
      setCart(cartArray)
      calcCartQty(cart)
    }
  }

  return (
    <HashRouter>
      <div className="App">
        <Header cartItemNum={cartItemNum} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage addFunc={addFunc} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} minusItem={minusItem} plusItem={plusItem} />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
