import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Alert from './Alert'

const Layout = ({isAlert,alertMsg,color,setIsAlert,isSigned,setIsSigned}) => {
  setTimeout(()=>{
    setIsAlert(false);
  },2000);
  return (
    <>
    <Navbar isSigned={isSigned} setIsSigned={setIsSigned} />
    {isAlert&& <Alert alertMsg={alertMsg} color={color}/>}
    <Outlet/>
    </>
  )
}

export default Layout
