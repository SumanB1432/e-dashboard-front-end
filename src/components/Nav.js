// import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css";
import image from '../images/logo.png'

function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()

  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  
  return (
    <div>
      <img className='nav-logo' src={image} alt='logo'></img>
       {auth ? <ul className='nav-ui'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li> <Link to="/update">Update Product</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li><Link to="/signup" onClick={logout}>Logout ({ JSON.parse(auth).name})</Link></li>
            </ul>:
        <ul className='nav-ui nav-right'>
          <li><Link to="/signup">Sign Up</Link></li>
           <li><Link to="/login">login</Link></li>
        </ul>
}
    </div>
  )
}

export default Nav