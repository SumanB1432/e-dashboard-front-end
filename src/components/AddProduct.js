import React from 'react'
import { useState } from 'react';

function AddProduct() {
    
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false)

    const addProduct=async ()=>{

        if(!name || !price || !category || !company){
            setError(true)
            return false
        }
        console.warn(name,price,category,company);

        const userId = JSON.parse(localStorage.getItem("user"))._id;
        console.warn(userId)
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result)
        alert("product added successfully")
        
    }

  return (
    <div className='product'>
        <h1>AddProduct</h1>
        <input className='inputBox' placeholder='Enter product name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
       { error && !name && <span className='addproduct-val'>Enter valid Name</span>}

        <input className='inputBox' placeholder='Enter product price' type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>

        {error && !price && <span className='addproduct-val'>Enter valid Price</span>}
        <input className='inputBox' placeholder='Enter product category' type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}}></input>
        {error && !category && <span className='addproduct-val'>Enter valid Category</span>}
        <input className='inputBox' placeholder='Enter product company' type='text' value={company} onChange={(e)=>{setCompany(e.target.value)}}></input>
        {error && !company && <span className='addproduct-val'>Enter valid Company</span>}
        <button className='add-button'onClick={addProduct}>Add Product</button>
        </div>
  )
}

export default AddProduct