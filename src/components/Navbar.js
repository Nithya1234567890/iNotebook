import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({isSigned,setIsSigned}) => {
    const loc=useLocation();
    const navigate=useNavigate();
    useEffect(()=>{
        console.log(loc.pathname);
    })
    const onclick=()=>{
      setIsSigned(false);
      navigate('/login/');
      localStorage.removeItem('token');
    }
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{position:"sticky",top:"0px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==='/'?"active":""}`} aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==='/about/'?"active":""}`}  to='about/'>About</Link>
        </li>
      </ul>
      <div className="d-flex">
        {!isSigned && <Link to='login/'><button className="btn btn-primary mx-2" type="button">Login</button></Link>}
        {!isSigned && <Link to='signUp/'><button className="btn btn-primary mx-2" type="button">SignUp</button></Link>}
        {isSigned && <Link to='login/'><button className="btn btn-primary mx-2" type="button" onClick={onclick}>Log Out</button></Link>}
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
