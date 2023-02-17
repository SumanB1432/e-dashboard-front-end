import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Nav() {
  return (
    <div>
        <ul className='nav-ui'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li> <Link to="/update">Update Product</Link></li>
            <li> <Link to="/logout">Logout</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>

               
            
        </ul>
    </div>
  )
}

export default Nav