import React from 'react'
import { useState } from 'react';

function AddProduct() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");

    const addProduct=async ()=>{
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
        
    }

  return (
    <div className='product'>
        <h1>AddProduct</h1>
        <input className='inputBox' placeholder='Enter product name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <input className='inputBox' placeholder='Enter product price' type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
        <input className='inputBox' placeholder='Enter product category' type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}}></input>
        <input className='inputBox' placeholder='Enter product company' type='text' value={company} onChange={(e)=>{setCompany(e.target.value)}}></input>
        <button className='add-button'onClick={addProduct}>Add Product</button>
        </div>
  )
}

export default AddProduct