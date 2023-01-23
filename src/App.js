import './App.css';
import Home from './Pages/Home/Home';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  function addFunc(prod) {
    let cartArray = [...cart]
    cartArray.push(prod)
    setCart(cartArray)
  }
  return (
    <div className="App">
      <Home addFunc={addFunc} />
      {cart.map(item => <p>{item.prodTitle}</p>)}
    </div>
  );
}

export default App;
