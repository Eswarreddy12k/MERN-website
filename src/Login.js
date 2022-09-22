import React from 'react'
import {Routes, Route, useNavigate,Router} from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faUser } from '@fortawesome/fontawesome-free-solid'


function Login() {
    const navigate = useNavigate();
    console.log('aaa')
  return (
    <>
     <div className="wrapper">
  <div className="logo">
    
  </div>
  <div className="text-center mt-4 name">Website</div>
  <form className="p-3 mt-3">
    
    <div className="form-field d-flex align-items-center">
      
      <input type="text" name="userName" id="userName" placeholder="Username" />
    </div>
    <div className="form-field d-flex align-items-center">
      
      <input type="password" name="password" id="pwd" placeholder="Password" />
    </div>
    <button className="btn mt-3">Login</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
  </div>
</div>

    </>
  )
}

export default Login