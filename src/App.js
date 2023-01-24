import './reset.css'
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [cart, setCart] = useState([])

  function addFunc(prod) {
    let cartArray = [...cart]
    cartArray.push(prod)
    setCart(cartArray)
    console.log(cart)
  }

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home addFunc={addFunc} />} />
          {/* {cart.map(item => <p key={uuidv4()}>{item.prodTitle}</p>)} */}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
