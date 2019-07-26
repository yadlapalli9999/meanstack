const express = require('express');
const router = express.Router();


const User = require('../models/usermodel')

router.get('/test',(req,res)=>{
    res.send('test method is working')
})

router.post('/add',(req,res)=>{
    var users = new User(req.body)
    console.log(users)
    users.save()
    .then(users => {
      res.status(200).json({'users': 'users in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


router.get('/allUsers',(req,res)=>{
    User.find(function (err, users){
        if(err){
          console.log(err);
        }
        else {
          res.json(users);
        }
      });
});

router.get('/edit/:id',((req, res)=> {
    let id = req.params.id;
    User.findById(id, function (err, users){
       res.json(users)
    });
}));

router.put('/update/:id',((req, res, next)=>{
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
      if (err) return next(err);
      res.json({'message':'updated user successfully',user});
    });
}));

router.delete('/delete/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
      if (err) return next(err);
      res.json({'user':'successfully removed user'});
    });
});


module.exports = router;