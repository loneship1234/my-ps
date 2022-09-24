import React from 'react'
// route
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
// 
import HomePage from './Pages/HomePage';
import NavBar from './Pages/NavBar'
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page404 from './Pages/Page404';
import GameCatalog from './Pages/GameCatalog'
import AddToCart from "./Pages/AddToCart";
// import Footer from './Pages/Footer';
import Product from './Pages/Product';
import {CartProvider} from 'react-use-cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game-catalog" element={<GameCatalog />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/game-catalog/:id" element={<Product />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </CartProvider>
  );
}

export default App