const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A blog must have a title'],
    },
    mainImage:{
        type: String,
        required: [true, 'A blog must have a main image']        
    },
    tags: {
        type: [String],
        required: [true, 'A blog must have at least one tag']
    },
    smallDescription:{
        type: String,
        required: [true, 'A blog must have a small description'],
        //not more than 350 characters will be introduced later
        //in future try to implement that small description will automatically be generated from the main description
    },
    mainDescription:{
        type: String,
        required: [true, 'A blog must have a main description'],
    },
    dateTime:{
        type: Date,
        default: Date.now(),
    }
})

console.log("Blog Model -> Working Good");
module.exports = mongoose.model('Blog', blogSchema);