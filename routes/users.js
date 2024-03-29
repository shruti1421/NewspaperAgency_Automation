const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check'); //user input validator
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

//@route      POST api/users
//@desc       Register a user
//@access     Public
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid Email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min: 6}),
],async (req,res) => {
    console.log("hello");
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }

    const {  name, email, password} = req.body; //to get these values from user

    try {
        let user = await User.findOne({email});  // finds an user with the same email

        if(user){
            return res.status(400).json({msg: 'User already exists'});
        }

        //User model
        user = new User({
            name,
            email,
            password
        });

        //Hasing the password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        //sending it to the db
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.jwtSecret,{ 
            expiresIn: 360000
         } ,(err,token) =>{
             if(err)throw err;
             res.json({token});
         } )

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;