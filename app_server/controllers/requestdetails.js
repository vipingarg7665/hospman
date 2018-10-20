const mongoose =require('mongoose');
const requestu =mongoose.model('requestdetail');
const request =function(req,res){
    requestu.create({
    department: req.body.department,
    name:  req.body.name,
    title:  req.body.title,
    phoneno:    req.body.phoneno,
    altphoneno: req.body.altphoneno,
    email:      req.body.email
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('visitordetail');
        }
        
    });
};
module.exports={
   request 
};
