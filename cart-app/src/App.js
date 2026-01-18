import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  // to store the products
  const [products, setProducts] = useState([]);

  // to store the cart items
const [cart, setCart] = useState([]);
  // to control the cart modal visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // fetch product from fake store api

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  })

  // function to add product to cart
  const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id);

if (exists) {
  alert("Product already in cart");
}else{
  setCart([...cart, product]);
}
  };
  
  // function to remove product from cart
  const removeFromCart = (id) => {
    // check if product alreadyt exists in cart
    setCart(cart.filter((item) => item.id !== id));
  };


  return (
    <div className="App">
      <NavBar cartCount = {cart.length} openCart = {() => setIsCartOpen(true)}/>
      <ProductList products = {products} addToCart = {addToCart}/>
      {/* cart Modal */}
     
      {isCartOpen && (
         <CartModal
        cart = {cart} 
      closeModal = {() => setIsCartOpen(false)}
      removeFromCart ={removeFromCart}
      />
      )}

    
    </div>
  );
}

export default App;