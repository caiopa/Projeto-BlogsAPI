const Joi = require('joi');

const validateBody = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

module.exports = validateBody;
