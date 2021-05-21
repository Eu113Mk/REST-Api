const express = require('express');
const router = express.Router();
const User = require('../Models/User');


//POST :  ADD A NEW USER TO THE DATABASE 
 
router.post('/newuser', (req, res)=>{
    let newUser= new User(req.body)
    newUser.save( (err, data)=>{
        err? console.log(err) : res.send('user was added')    })
})

// GET :  RETURN ALL USERS 
//get users @Get
router.get('/', (req, res)=>{
    User.find({}, (err, data)=>{
        err? console.log(err) : res.json(data) 
    })
})

//PUT : EDIT A USER BY ID 
//updta user by id @Put
router.put('/update/:id', (req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id}, {...res.body} ,(err, msg)=>{
        err? console.log(err) : res.json({msg: "user is updated"}) 
    })
})

// DELETE : REMOVE A USER BY ID 
// delete user by id @Delete
router.delete('/deleteuser/:id', (req, res)=>{
    User.findByIdAndDelete({_id: req.params.id}, (err,msg)=>{
        err? console.log(err) : res.json({msg:'user was deleted'}) 

    })
})

module.exports = router