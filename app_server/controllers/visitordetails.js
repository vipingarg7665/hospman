const mongoose =require('mongoose');
const requestu =mongoose.model('visitordetail');
const visitor =function(req,res){
    requestu.create({
    firstname:  req.body.firstname,
    lastname:   req.body.lastname,
    organisation:req.body.organisation,

    phoneno:    req.body.phoneno,
    altphoneno: req.body.altphoneno,
    email:      req.body.email,
    arrivaldate: req.body.arrivaldate,
    arrivaltime: req.body.arrivaltime,
    departuredate: req.body.departuredate,
    depaerturetime: req.body.departuretime,
    purpose: req.body.purpose
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('requirment');
        }
        
    });
};
module.exports={
   visitor 
};