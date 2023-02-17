import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {


      const auth = localStorage.getItem('user');
      if (auth) {
          navigate("/")

      }
  })

    const handleLogin= async ()=>{
        console.warn(email,password)
        let result = await fetch('http://localhost:5000/login',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers: {
            'Content-Type': 'application/json'
        },
        });
        result = await result.json();
        console.warn(result)
        if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
          navigate("/")

        }
        else{
          alert("please enter correct details")
        }

    }
    
  return (
    <div className='login'>
            <h1>LogIn</h1>
            <input className='login-inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} type='text'  placeholder='Enter Email'></input>
            <input className='login-inputBox' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Password'></input>
            <button  className="login-button" onClick={handleLogin} type="login-button">Login Up</button>
        </div>
  )
}

export default Login