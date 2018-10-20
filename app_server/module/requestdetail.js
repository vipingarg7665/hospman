const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const requestdetails = mongoose.Schema({ 
  
    department:{
      type: String,
    },
    name:{ 
      type: String,
    },
    phoneno:{
      type: String,
   },
   title:{
    type: String,
 },
   altphoneno:{
      type: String,
   },
   email:{
      type:String,
   }
  
})


module.exports = mongoose.model('requestdetail',requestdetails );
