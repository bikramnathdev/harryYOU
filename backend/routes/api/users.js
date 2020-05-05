const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


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
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('user route')}
);

module.exports = router;