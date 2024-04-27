import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const host="http://localhost:5000";
    const [notes,setNotes]=useState([]);


    const getAllNotes=async()=>{
        const response= await fetch(`${host}/api/notes/fetchAllNotes`,{
          method:"GET",
          headers:{
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyN2QyM2JkMmJlY2QwNTM0OGQ4OTYyIn0sImlhdCI6MTcxMzk2MDg0Nn0.stvvZjTxcsBr2PDKZZNiKd8PKXc8i4W7qhgHA4nnrr8"
          }
        });
        const json=await response.json();
        setNotes(json);
    }

    const addNote= async({title,description,tag})=>{
      const response= await fetch(`${host}/api/notes/addNote`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyN2QyM2JkMmJlY2QwNTM0OGQ4OTYyIn0sImlhdCI6MTcxMzk2MDg0Nn0.stvvZjTxcsBr2PDKZZNiKd8PKXc8i4W7qhgHA4nnrr8"
        },
        body:JSON.stringify({title,description,tag})
      });
      const json=await response.json();
      setNotes(prev=>[json,...prev]);
    }

    const deleteNote= async(id)=>{
      const response=await fetch(`${host}/api/notes/deleteNote/${id}`,{
        method:"DELETE",
        headers:{
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyN2QyM2JkMmJlY2QwNTM0OGQ4OTYyIn0sImlhdCI6MTcxMzk2MDg0Nn0.stvvZjTxcsBr2PDKZZNiKd8PKXc8i4W7qhgHA4nnrr8"
        }
      });
      const note=await response.json();
      setNotes((prev)=>prev.filter((prevnote)=> prevnote._id !== note._id));
    }

    const updateNote=async(id,{title,description,tag})=>{
      console.log(id);
      const response=await fetch(`${host}/api/notes/updateNote/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyN2QyM2JkMmJlY2QwNTM0OGQ4OTYyIn0sImlhdCI6MTcxMzk2MDg0Nn0.stvvZjTxcsBr2PDKZZNiKd8PKXc8i4W7qhgHA4nnrr8"
        },
        body:JSON.stringify({title,description,tag})
      });
      const note=await response.json();
      console.log(note._id);
      setNotes((prev)=>(
        prev.map((prevnote)=>(prevnote._id===id?note:prevnote))
      ))
    }

  return (
    <NoteContext.Provider value={{notes,setNotes,getAllNotes,addNote,deleteNote,updateNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
