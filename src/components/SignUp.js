import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom/dist';
import './SignUp.css'

const SignUp = ({setIsAlert,setAlertMsg,setColor,setIsSigned}) => {
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
    const navigate=useNavigate();
    const onchange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }
    const onsubmit=async(e)=>{
      e.preventDefault();
      const {name,email,password,cpassword}=credentials;
      if(password !== cpassword){
        setIsAlert(true);
        setAlertMsg("Password doesn't match");
        setColor("danger");
        return
      }
      const response= await fetch('http://localhost:5000/api/auth/createUser',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,password})
      })
      const json=await response.json();
      if(json.success){
        localStorage.setItem("token",json.authtoken);
        navigate('/');
        setIsAlert(true);
        setAlertMsg("You have SignedIn Successfully");
        setColor("success");
        setIsSigned(true);
      }
      else{
        setIsAlert(true);
        setAlertMsg("User with this Email already Exists");
        setColor("danger");
      }
    }


  return (
    <div className="container box1" style={{padding:"7rem"}}>
        <form onSubmit={onsubmit} style={{marginTop:"20px"}}>
      <h2 className='text-center mb-4'>SignUp</h2>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={credentials.name} placeholder='Name' onChange={onchange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} placeholder='Email' onChange={onchange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} placeholder='Password' onChange={onchange} minLength={4} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} placeholder='Confirm Password' onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div className="mb-3 my-3">
    <p>Already have an account? <Link onClick={()=>navigate('/login/')}>Login here</Link></p>
  </div>
</form>
    </div>
  )
}

export default SignUp
