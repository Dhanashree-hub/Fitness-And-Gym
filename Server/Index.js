// import express from "express";
// import cors from "cors";

const express =require('express');
const app =express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
// const Contact = require('./Models/Contact');
const Contact = require('./Models/contact');

app.post("/",async(req,res)=>{
    
    let contact = new Contact(req.body);
    
     let result = await contact.save();
     res.send(result);
})

const PORT = 4000; // Ensure this matches your frontend's target URL
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});