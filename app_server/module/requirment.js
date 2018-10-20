const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiements = new Schema({
   
    pichupreq:{
        type: String,
    },
    pickupinfo:{
        type: string,
    },
    dropreq:{
        type: String,
    },
    dropinfo:{
        type: String,
    },
    meals:{
        type: meals,
    }


    
})
module.exports = mongoose.model('requirment',requirments);