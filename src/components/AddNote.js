import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const AddNote = ({setAlertMsg,setColor,setIsAlert}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const { addNote } = useContext(NoteContext);

  const handleClick = (e) => {
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
    addNote({ title, description, tag });
    setTitle("");
    setDescription("");
    setTag("");
    setIsAlert(true);
    setAlertMsg("Note added successfully");
    setColor("success");
  };

  return (
    <div style={{marginTop:"5rem"}}>
      <form style={{ margin: "3rem"}}>
        <h2>Add Your Note</h2>
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
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          ADD NOTE
        </button>
      </form>
    </div>
  );
};

export default AddNote;
