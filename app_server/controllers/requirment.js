const mongoose =require('mongoose');
const requestu =mongoose.model('requirment');
const requirment =function(req,res){
    requestu.create({
    pickupreq: req.body.pickupreq,
    pickupinfo: req.body.pickupinfo,
    dropreq: req.body.dropreq,
    dropinfo: req.body.dropinfo
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('login');
        }
        
    });
};
module.exports={
   requirment
};