import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteItem = ({ note,handleClick,setAlertMsg,setColor,setIsAlert }) => {
const {deleteNote}=useContext(NoteContext);

const handleDelete=()=>{
  deleteNote(note._id);
  setIsAlert(true);
  setAlertMsg("Note deleted Successfully");
  setColor("success");
}


  return (
    <>
    <div className="col-md-4">
      <div className="card my-3" style={{ width: "22rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
          <h4 style={{width:"75%"}} className="card-title">{note.title}</h4>
          <div style={{width:"25%"}} className="d-flex justify-content-evenly">
          <p onClick={()=>handleClick(note._id)} style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-regular fa-pen-to-square"></i></p>
          <p style={{cursor:"pointer"}} onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></p>
          </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NoteItem;
