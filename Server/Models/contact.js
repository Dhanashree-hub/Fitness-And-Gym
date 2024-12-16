const mongoose =require('mongoose');

const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    clas:String,
    description:String
});

module.exports = mongoose.model("contact",contactSchema);