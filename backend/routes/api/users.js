const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');



const User = require('../../model/users.model');

router.post('/',
[
    check('firstname','First name is required')
    .not()
    .isEmpty(),
    check('lastname','Last name is required')
    .not()
    .isEmpty(),
    check('email','Email should be a valid one')
    .isEmail(),
    check('password','Password should be 6 characters long')
    .isLength({min:6})
],
async (req,res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const {firstname,lastname,email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({errors: [{msg: 'User already registered'}]})
        }

        user = new User({
            firstname,
            lastname,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        return res.status(200).json({success: "User registered"});
        // res.send('User registered');   
        
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;