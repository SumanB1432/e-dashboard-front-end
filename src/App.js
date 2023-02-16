import React from 'react';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      </BrowserRouter>
      
    </div>
  )
}

export default App