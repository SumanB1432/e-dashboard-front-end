// import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()

  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  
  return (
    <div>
        <ul className='nav-ui'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li> <Link to="/update">Update Product</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li> {auth? <Link to="/signup" onClick={logout}>Logout</Link>:<Link to="/signup">Sign Up</Link>}</li>
            <li> <Link to="/login">login</Link></li>
            

               
            
        </ul>
    </div>
  )
}

export default Nav