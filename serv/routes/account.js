const router = require('express').Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const config = require('../config');




router.post('/signup', (req, res, next) => {
    let user = new User();
    user.name = req.body.firstname,
    user.email = req.body.email,
    user.password = req.body.password,
    user.picture = user.gravatar(),
    user.isSeller = req.body.isSeller
 
    User.findOne({ email: req.body.email }, function(err, existingUser) {
        if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

        // If user is not unique, return error
        if (existingUser) {
            return res.status(201).json({
                success: false,
		        message: 'Email already exists.'
            });
        } else {
            user.save();

            var token = jwt.sign({
                user:user
            }, config.secret, {
                expiresIn: '7d'
            });
            res.json({
                success: true,
		        message: 'Enjoy.'
            });
        }
    });
});


module.exports = router;