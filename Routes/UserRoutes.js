const express = require('express');
const User = require('./userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {signinRequestValidation} = require('./validation');
const  {registerValidation} = require('./validation');
const  {isRequestValidated} = require('./validation');
const {jwtSecret} = require('../config/keys');
const {api_key} = require('../config/keys');
const {DOMAIN} = require('../config/keys');
const router = express.Router();
const mailgun = require("mailgun-js");




router.post('/signin', signinRequestValidation, isRequestValidated,  async(req, res) => {
   
   const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({
                error: 'Invalid email or password'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                error: 'Invalid email or password'
            });
            
        }
        
        const payload = {
            user: {
                _id: user._id
            }

        };

        jwt.sign(payload, jwtSecret, {expiresIn: '1d'}, (err, token) => {
            if(err) console.log('jwt error', err);
            const { _id, name, email, role} = user;

            res.json({
                token,
                user: { _id, name, email, role}

            });        
        });
        
    } catch (error) {
        res.status(404).json({error: 'signin error'});
        
    }
       
            }
            );


router.post('/register', registerValidation, isRequestValidated, async (req, res) => {
      const { name, email, password} = req.body;

    const user = new User();
    user.name = name;
    user.email = email;
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    const newUser = await user.save();

    res.json({
        successMessage: 'Registeration Success. Please Sign in'
    })
    
   
   
       
   
    if (newUser) {

        return res.send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            token: signinAccessToken(newUser)
            
           


        });
        
        
    } else {
        res.status(401).send({error: 'Invalid User Data'});
        
    }

   

    
});


/*******************************************************************************
********************************Contact Us***************************************
                     ********************************/
    
          router.post('/contact', async(req, res) => {
                const {email, subject, message} = req.body;
                const mg = mailgun({apiKey: api_key, domain: DOMAIN});
                const data = {
                    from: email,
                    to: 'saeedchachar987654@gmail.com',
                    subject: subject,
                    text: message
                };
                mg.messages().send(data, function (error, body) {
                    res.json({successMessage: 'Your message has been sent successfully!'});
                    if(error) {
                        res.json({err: 'Message not set!'})
                    }
                     else {
                         res.json(body);
                     }
                    });
               
                        
                    });





module.exports = router;