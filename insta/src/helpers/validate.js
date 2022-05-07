const joi=require('joi');

const authSchema = Joi.object({
    
    email: Joi.string().email().lowercase().required(),
    fullname : Joi.string().required().messages({
        'string.empty': `"name" cannot be an empty field`,
      }),
    username : Joi.string().required().messages({
        'string.empty': `"name" cannot be an empty field`,
      }),
    
    
    password : Joi.string().min(6).required(),
    confirmpassword : Joi.string().min(6).required(),

});






module.exports = authSchema;