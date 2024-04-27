import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom/dist';

const Login = ({setIsAlert,setAlertMsg,setColor,setIsSigned}) => {
    const navigate=useNavigate();
    const [credentials,setCredentials]=useState({email:"",password:""});
    const onchange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }
    const onsubmit= async(e)=>{
        e.preventDefault();
        const {email,password}=credentials;
        const response=await fetch("http://localhost:5000/api/auth/login",{
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify({email,password})
        });
        const json=await response.json();
        if(json.success){
          navigate('/')
          localStorage.setItem('token',json.authtoken);
          setIsAlert(true);
          setAlertMsg("You have LoggedIn Successfully");
          setColor("success");
          setIsSigned(true);
        }
        else{
          setIsAlert(true);
          setAlertMsg("Incorrect Details");
          setColor("danger");
        }
    }
  return (
    <div className="container box" style={{padding:"7rem"}}>
        <form onSubmit={onsubmit} style={{marginTop:"20px"}}>
      <h2 className='text-center mb-4'>Login</h2>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onchange} value={credentials.email} placeholder='Email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onchange} value={credentials.password} placeholder='Password'/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div className="mb-3 my-3">
    <p>Don't have an account? <Link onClick={()=>navigate('/signUp/')}>SignUp here</Link></p>
  </div>
</form>
    </div>
  )
}

export default Login
