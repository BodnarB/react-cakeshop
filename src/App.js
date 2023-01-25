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

  function addFunc(prod) {
    let cartArray = [...cart]
    cartArray.push(prod)
    setcartItemNum(cartArray.reduce((acc, curr) => acc + curr.prodQty, 0))
    setCart(cartArray)
  }

  return (
    <HashRouter>
      <div className="App">
        <Header cartItemNum={cartItemNum} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage addFunc={addFunc} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
