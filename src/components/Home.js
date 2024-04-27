import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

const Home = ({setAlertMsg,setColor,setIsAlert,setIsSigned}) => {
  return (
    <div className='container my-3'>
      <AddNote setAlertMsg={setAlertMsg} setColor={setColor} setIsAlert={setIsAlert}/>
      <Notes setAlertMsg={setAlertMsg} setColor={setColor} setIsAlert={setIsAlert} setIsSigned={setIsSigned}/>
    </div>
  )
}

export default Home
