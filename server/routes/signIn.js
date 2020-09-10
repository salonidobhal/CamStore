const express= require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User= require('../models/User');


router.post('/', (req, res, next) =>{
    User.find({username : req.body.username})
    .exec()
    .then(user => {
        if (user.length<1){
            return res.status(401).json({
                message: "User Unauthorized"
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
            if(err){
                return res.status(401).json({
                    message:"Invalid Username/Password"
                });
            }
            if(result){
                return res.status(200).json({
                    message:"Authentication Successful"
                });
            }
            res.status(401).json({
                message:"Unauthorised User"      
            });
        });

    })
    .catch(err => {
        console.log(err);
        res.status(500).json({//500:server error
            error: err
    });
});
});

module.exports= router;