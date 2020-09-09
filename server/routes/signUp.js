const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
var fs = require('fs');
var path = require('path');
var multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage
});


router.post('/', upload.single('photo'), (req, res, next) => {
    console.log(req.body);
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                //mail exists
                return res.status(409).json({ //409 is conflict
                    message: "User already exits"
                });
            }
            else {
                //Generate new User
                bcrypt.hash(req.body.password, 10, (err, hash) => {//use 10 or above saltOrRounds
                    if (err) {
                        console.log(err);
                        return res.status(500).json({// 500-server error 
                            error: err
                        })
                    }
                    else {
                        let user = new User({
                            _id: new mongoose.Types.ObjectId,
                            name: req.body.name,
                            sex: req.body.sex,
                            dateOfBirth: req.body.dateOfBirth,
                            placeOfBirth: req.body.placeOfBirth,
                            email: req.body.email,
                            username: req.body.username,
                            password: hash,
                            photo: {
                                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                            }
                        }
                        ); 

                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({//result of post request is created
                                    message: "User Created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({//internal error-500
                                    error: err
                                });
                            });
                    }
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(432).json({//422- unprocess about entity error
                error: err
            });
        });
});

module.exports = router;