

const visitors=function(req,res){
  res.render('visitorDetail.ejs', { title: 'Express' })

};
const visitorAdmin=function(req,res){
  res.render('visitorDetailsAdmin.ejs', { title: 'Express' })

};
const requirment=function(req,res){
  res.render('requirment.ejs', { title: 'Express' })

};
const request=function(req,res){
  res.render('request.ejs', { title: 'Express' })

};
const login=function(req,res){
  res.render('login.ejs', { title: 'Express' })

};
const room=function(req,res){
  res.render('room.ejs', { title: 'Express' })

};
const meal=function(req,res){
  res.render('meal.ejs', { title: 'Express' })

};
const pickup=function(req,res){
  res.render('pickup.ejs', { title: 'Express' })

};
const departure=function(req,res){
  res.render('departure.ejs', { title: 'Express' })

};
module.exports={
    visitors,
    departure,
    pickup,
    meal,
    request,
    requirment,
    room,
    visitorAdmin,
    login
};
