import React from 'react'
import './Header.css'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faUser } from '@fortawesome/fontawesome-free-solid'
import {Routes, Route, useNavigate,Router} from 'react-router-dom';

import Login from './Login';

function Header() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login', {replace: true});
      };
    return (
    <>
        <div className='header'>
            <div>
                <h1>Website</h1>
            </div>
            <div>
                <a href='#'>Home</a>
                <a href='#'>Home</a>
                <a href='#'>Home</a>
                <button onClick={handleClick} style={{background:'white',width:'40px',height:'40px',borderRadius:'50%',fontSize:'20px'}}><FontAwesomeIcon icon={faUser} /></button>
            </div>
            
            
            
        </div>
    </>
  )
}


export default Header