const schemaUser = require('../utils/schemaUser');
const errorGene = require('../utils/errorGene');

const userMiddleware = async (req, res, next) => {
    const { error } = schemaUser.validate(req.body);
    if (error) next(errorGene(400, error.message));
    next(); 
};

module.exports = userMiddleware;