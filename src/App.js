import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import PrivateComponent from './components/PrivateComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>product listing component</h1>}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/update" element={<h1>product update</h1>}></Route>
        <Route path="/logout" element={<h1>logout component</h1>}></Route>
        <Route path="/profile" element={<h1>profile component</h1>}></Route>
        </Route>

        <Route path="/signup" element={<SignUp/>}>signup</Route>
        <Route path="/login" element={<Login/>}>LonIn</Route>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  )
}

export default App