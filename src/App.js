import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  } 
   const hideCartHandler = () => {
    setCartIsShown(false);
  } 

  return (
      <CartProvider>
        {cartIsShown && <Cart onClick = {hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
            <Meals/>
        </main>
      </CartProvider>
      
    
  );
}

export default App;
