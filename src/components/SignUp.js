import React from 'react';
import { useState } from 'react';

function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const collectData=()=>{
        console.warn(name,email,password);
        const result = fetch('http://localhost:5000/register',)
    }
  return (
    <div className='register'>
        <h1>SignUp</h1>
        <input className='inputBox' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
        <input className='inputBox' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'></input>
        <input className='inputBox' type="password"value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'></input>
        <button onClick={collectData} className="signup-button" type="button">Sign Up</button>
    </div>
  )
}

export default SignUp