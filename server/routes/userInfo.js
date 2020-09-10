const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', (req, res, next) =>{
    console.log("Get Request");
    User
    .find({username: req.body.username})
    .exec()
        .then(docs => { 
            console.log("Status 1: Success");
            console.log(docs[0]);
            res.status(200).json(docs[0]);
        })
        .catch(err => {
            console.log("Status 2: Failure");
            res.status(500).json({
                error: err
            });
        });
});



module.exports = router;
