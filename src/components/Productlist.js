import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Productlist() {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProduct();

    },[])

    const getProduct = async()=>{
        let result = await fetch('http://localhost:5000/get-product',{
            headers:{
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        result = Array.from(result)
        setProducts(result);

    }
    console.warn(products)

    const deleteProduct=async(id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:'Delete',
        headers:{
            authorization: JSON.parse(localStorage.getItem('token'))
        }
    });
    result = await result.json();
    if(result){
        alert("record is deleted")
        getProduct()
    }

    }

    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization: JSON.parse(localStorage.getItem('token'))
                }
            });
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }else{
            getProduct();
        }
        
    }

  return (
    <div className='product-list'>
        <h1>product list</h1>
        <input type="" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             />
        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>operation</li>
            {/* <li>userId</li> */}
        </ul>
        {
          products.length>0 ? products.map ((item,index)=>(
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li> $ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to= {`/update/${item._id}`}>update</Link>
            </li>
        </ul>
            )

            ):
            <h1>no result found</h1>
        }
        
    </div>
  )
}

export default Productlist