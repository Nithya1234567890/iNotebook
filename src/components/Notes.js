import React, { useContext, useEffect,useRef,useState } from 'react'
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = ({setAlertMsg,setColor,setIsAlert,setIsSigned}) => {
    const {notes,setNotes,getAllNotes,updateNote}=useContext(NoteContext);
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [tag, setTag] = useState("");
      const cancelRef=useRef();
      const [updatedId,setUpdatedId]=useState("");
      const navigate=useNavigate();

    useEffect(()=>{
      const token=localStorage.getItem('token');
      if(token){
        navigate('/')
        setIsSigned(true);
      }
      else{
        navigate('/login/');
        setIsSigned(false);
      }
      getAllNotes();
       // eslint-disable-next-line
    },[])

    const handleClick=(e)=>{
      setUpdatedId(e);
    }
    const update=(e)=>{
      e.preventDefault();
      if(title.length<3){
        setIsAlert(true);
        setAlertMsg("Title Should be altleast 3 characters");
        setColor("danger");
        return;
      }
      if(description.length<4){
        setIsAlert(true);
        setAlertMsg("description Should be altleast 4 characters");
        setColor("danger");
        return;
      }
      updateNote(updatedId,{title,description,tag});
      cancelRef.current.click();
      setIsAlert(true);
      setAlertMsg("Note Updated Successfully");
      setColor("success");
    }

  return (
    <>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form style={{ margin: "3rem" }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={title}
            placeholder="Your Title"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            placeholder="Your Description"
            onChange={(e) => {
              e.preventDefault();
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={tag}
            placeholder="Your Tag"
            onChange={(e) => {
              e.preventDefault();
              setTag(e.target.value);
            }}
          />
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={cancelRef}>Close</button>
        <button type="button" className="btn btn-primary" onClick={update}>Edit Note</button>
      </div>
    </div>
  </div>
</div>
    <div className='container' style={{margin:"1.6rem"}}>
    <h2>Your Notes</h2>
    <div className='row'>
        {notes.map((note)=>(<NoteItem key={note._id} note={note} setNotes={setNotes} setAlertMsg={setAlertMsg} setColor={setColor} setIsAlert={setIsAlert} handleClick={handleClick}/>))}
    </div>
    </div>
    </>
  )
}

export default Notes
