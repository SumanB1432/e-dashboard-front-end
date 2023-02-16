import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>product listing component</h1>}></Route>
        <Route path="/add" element={<h1>Add product component</h1>}></Route>
        <Route path="/update" element={<h1>product update</h1>}></Route>
        <Route path="/logout" element={<h1>logout component</h1>}></Route>
        <Route path="/profile" element={<h1>profile component</h1>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  )
}

export default App