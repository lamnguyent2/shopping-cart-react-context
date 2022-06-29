import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inhd from './components/admin/order/Inhd';
import Showorder from './components/admin/order/Showorder';
import Showproduct from './components/admin/product/Showproduct';
import Createproduct from './components/admin/product/themxoasua/Createproduct';
import Editproduct from './components/admin/product/themxoasua/Editproduct';
import Bangthongke from './components/admin/thongke/Bangthongke';
import Bieudothongke from './components/admin/thongke/Bieudothongke';
import Showuser from './components/admin/user/Showuser';
import Edituser from './components/admin/user/themxoasua/Edituser';
import Cart from './components/cart/cart/Cart';
import Checkout from './components/cart/checkout/Checkout';
import Category from './components/category/Category';
import BaocaoASM from './components/contact/BaocaoASM';
import Contact from './components/contact/Contact';
import Home from './components/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Productdetails from './components/product/productdetails/Productdetails';
import Productlike from './components/product/productlike/Productlike';
import Products from './components/product/products/Products';
import Login from './components/user/login/Login';
import Profile from './components/user/profile/Profile';
import Register from './components/user/register/Register';

function App() {
    const dataUser = localStorage.getItem("dataUser");
    const dataUsers = JSON.parse(dataUser);
    return (
        
            <div className="App">
                <Router>
                    <Header />
                    <section>
                    {(dataUsers) ? (
                        <Routes>
                            <Route path="/" element={ <Home /> } />
                            <Route path="products" element={ <Products /> } />
                            <Route path="product-details/:id" element={ <Productdetails /> } />
                            <Route path="productlike" element={ <Productlike /> } />
                            <Route path="cart" element={ <Cart /> } />
                            <Route path="checkout" element={ <Checkout /> } />
                            <Route path="login" element={ <Home /> } />
                            <Route path="register" element={ <Home /> } />
                            <Route path="profile/:id" element={ <Profile /> } />
                            <Route path="contact" element={ <Contact /> } />
                            <Route path="category/:id" element={ <Category /> } />
                            <Route path="admin-products" element={ <Showproduct /> } />
                            <Route path="create-products" element={ <Createproduct /> } />
                            <Route path="edit-products/:id" element={ <Editproduct /> } />
                            <Route path="admin-users" element={ <Showuser /> } />
                            <Route path="edit-users/:id" element={ <Edituser /> } />
                            <Route path="admin-orders" element={ <Showorder /> } />
                            <Route path="in-hoadon/:id" element={ <Inhd /> } />
                            <Route path="bangthongke" element={ <Bangthongke /> } />
                            <Route path="bieudothongke" element={ <Bieudothongke /> } />
                            <Route path="baocao" element={ <BaocaoASM /> } />
                        </Routes>
                        ) : (
                        <Routes>
                            <Route path="/" element={ <Home /> } />
                            <Route path="products" element={ <Products /> } />
                            <Route path="product-details/:id" element={ <Productdetails /> } />
                            <Route path="productlike" element={ <Productlike /> } />
                            <Route path="cart" element={ <Cart /> } />
                            <Route path="checkout" element={ <Checkout /> } />
                            <Route path="login" element={ <Login /> } />
                            <Route path="register" element={ <Register /> } />
                            <Route path="profile/:id" element={ <Login /> } />
                            <Route path="contact" element={ <Contact /> } />
                            <Route path="category/:id" element={ <Category /> } />
                            <Route path="admin-products" element={ <Login /> } />
                            <Route path="create-products" element={ <Login /> } />
                            <Route path="edit-products/:id" element={ <Login /> } />
                            <Route path="admin-users" element={ <Login /> } />
                            <Route path="edit-users/:id" element={ <Login /> } />
                            <Route path="admin-orders" element={ <Login /> } />
                            <Route path="in-hoadon/:id" element={ <Login /> } />
                            <Route path="bangthongke" element={ <Login /> } />
                            <Route path="bieudothongke" element={ <Login /> } />
                            <Route path="baocao" element={ <BaocaoASM /> } />
                        </Routes>
                    )}
                    </section>
                    <Footer/>
                </Router>
            </div>
    );
}

export default App;
