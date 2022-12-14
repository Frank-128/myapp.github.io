import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import Header from "./Header";

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate('/addproduct')
    }
  } ,)
  const navigate = useNavigate();
 async function login(){
    let item = {email,password}
    let result = await fetch("http://localhost:8000/api/login",{
      method:'POST',
      
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify(item)
      
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate('/addproduct')
  }

  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3 '>
    <h1>Login</h1>
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' className='form-control' />
    <br />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='form-control' />
    <br/>
    <button onClick={login} className='btn btn-success w-25'>Login</button>


    </div>
    </>
  )
}

export default Login