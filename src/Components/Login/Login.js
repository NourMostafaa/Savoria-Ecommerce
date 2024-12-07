import React, { useState } from 'react'
import './Login.css'
import { CiLogin } from "react-icons/ci";


const Login = ({setShowLogin}) => {

    const [switchState, setSwitchState] = useState("Login")

  return (
    <div className='login'>
        <form className='login-form'>
            <h1>{switchState} <CiLogin /></h1>
            {switchState==="Sign Up"?<input type="text" placeholder='Username' required/>:""}
            <input type="text" placeholder='Email' required/>
            <input type="password" placeholder='Password' required/>
            <button className='btn'>{switchState}</button>
            <p onClick={()=> setSwitchState(prev => prev === "Login" ? "Sign Up" : "Login")}>{switchState==="Login" ? "Dont have an account ?" : "Already have an account ?"}</p>
            <button className='btn btn-danger' onClick={()=>setShowLogin(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default Login