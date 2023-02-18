import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Productlist from './components/Productlist';
import UpdateProduct from './components/UpdateProduct';
import PrivateComponent from './components/PrivateComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Productlist />}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/update/:id" element={<UpdateProduct/>}></Route>
        <Route path="/logout" element={<h1>logout component</h1>}></Route>
        <Route path="/profile" element={<h1>profile component</h1>}></Route>
        </Route>

        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  )
}

export default App