const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitordetails = new Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    organistation:{
        type: String,
    },
    phoneno:{
        type: String,
    },
    altphoneno:{
        type: String,
    },
    email:{
        type: String,
    },
    arrivaldate:{
        type: Date,
    },
    arrivaltime:{
        type: String,
    },
    departuredate:{
        type: String,
    },
    departuretime:{
        type: String,
    },
    purpose:{
        type: String,
    },

})

module.exports = mongoose.model('visitordetail',visitordetails);
    

    
