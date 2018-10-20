var express = require('express');
var router = express.Router();
var req=require('../app_server/controllers/requestdetails');
var vis=require('../app_server/controllers/visitordetails');
var cntrl=require('./controllers/main');
router.get('/bringo/requirment',cntrl.requirment);
router.post('/bringo/request',req.request);
router.post('/bringo/visitor',vis.visitor);
router.get('/bringo/request',cntrl.request);
router.get('/bringo/visitor',cntrl.visitors);
router.get('/bringo/meal',cntrl.meal);
router.get('/bringo/departure',cntrl.departure);
router.get('/bringo/visitorAdmin',cntrl.visitorAdmin);
router.get('/bringo/pickup',cntrl.pickup);
module.exports = router;
