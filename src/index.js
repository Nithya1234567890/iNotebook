import React from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/NoteState';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { useState } from 'react';


const Create=()=>{
  const [isAlert,setIsAlert]=useState(false);
  const [alertMsg,setAlertMsg]=useState("");
  const [color,setColor]=useState("");
  const [isSigned,setIsSigned]=useState(false);


  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout isAlert={isAlert} alertMsg={alertMsg} color={color} setIsAlert={setIsAlert} isSigned={isSigned} setIsSigned={setIsSigned}/>}>
        <Route path='/' element={<Home setAlertMsg={setAlertMsg} setColor={setColor}  setIsAlert={setIsAlert} setIsSigned={setIsSigned}/>}/>
        <Route path='about/' element={<About/>}/>
        <Route path='login/' element={<Login setIsAlert={setIsAlert} setAlertMsg={setAlertMsg} setColor={setColor} isSigned={isSigned} setIsSigned={setIsSigned}/>}/>
        <Route path='signUp/' element={<SignUp setIsAlert={setIsAlert} setAlertMsg={setAlertMsg} setColor={setColor} isSigned={isSigned} setIsSigned={setIsSigned}/>}/>
      </Route>
    )
  );
  return(
    <NoteState>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </NoteState>
  )
};


const root = createRoot(document.getElementById('root'));
root.render(
  <Create/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();