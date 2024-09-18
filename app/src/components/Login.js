import React, { useState } from 'react';
import './login.css'; 

export default function Login() {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <div className="login d-flex flex-column">
      
        <p className = "loginname">LOGIN</p>
      
        <div className='user'><input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter your username"
        />
        <span></span></div>
        <div className='user' ><input 
          type="password"  
          value={password} 
          onChange={(e) => setPassword(e.target.value)}  
          placeholder="Enter your password"
        />
         <span></span></div>
        
        <p className='password'>forgot password ?</p>
        <button className='btn'>LOGIN</button>
        <p className='create'>create account</p>
      </div>
    </div>
  );
}
