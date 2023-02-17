import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const handleLogin=()=>{
        console.warn(email,password)
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