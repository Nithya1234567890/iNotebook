const express = require("express");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const FetchUser = require("../middleware/FetchUser");
const router = express.Router();



router.get('/fetchAllNotes',FetchUser,async(req,res)=>{
    try {
        const notes=await Notes.find({user:req.user.id});
    res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:error.array()});
    }
})

router.post(
  "/addNote",
  FetchUser,
  [
    body("title", "enter valid tile").isLength({ min: 3 }),
    body("description", "Description should be atleast 4 characters").isLength({
      min: 4,
    }),
  ],
  async(req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(500).json({ error: error.array() });
    try {
      const { title, description, tag  } = req.body;
      const savedNote = await Notes.create({ title, description, tag ,user:req.user.id});
      res.json(savedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:error.array()});
    }
  }
);

router.put('/updateNote/:id',FetchUser,async(req,res)=>{
    try{
      const {title,description,tag}=req.body;
      const newNote={};
      if(title) newNote.title=title;
      if(description) newNote.description=description;
      if(tag) newNote.tag=tag;

      let note=await Notes.findById(req.params.id);
      if(!note) return res.status(404).send("Not Found");
      if(note.user.toString() !== req.user.id) return res.status(401).send("Not Allowed");
      
      note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
      res.json(note);
    }
    catch(error){
      console.error(error);
      res.status(500).json({error:"Internal server Error"});
    }
})

router.delete('/deleteNote/:id',FetchUser,async(req,res)=>{
  try{
    let note=await Notes.findById(req.params.id);
    if(!note) return res.status(404).send("Not Found");
    if(note.user.toString()!==req.user.id) return res.status(401).send("Not Allowed");
    note=await Notes.findByIdAndDelete(req.params.id);
    res.json(note);
  }
  catch(error){
    console.error(error);
    res.status(500).json({error:"Internal server Error"});
  }
})



module.exports = router;
