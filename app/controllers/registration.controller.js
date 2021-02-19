const models = require('../models');

module.exports.registrationController = async (req, res, next) => {
    try {
        const User = new models.User({
            // username: 'helloo',
            // password: 'sample',

            //req.body
        });


        User.save(function(err,result){ 
            if (err){ 
                console.log(err); 
            } 
            else{ 
                console.log(result) 
            } 
        }) 

        return res.json({
            message: 'Success',
        });
    } catch (e) {}
};
