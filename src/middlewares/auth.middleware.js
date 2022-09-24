// const errorGene = require('../utils/errorGene');
const schemaLogin = require('../utils/schemaLogin');
const errorGene = require('../utils/errorGene');

const authMiddleware = async (req, res, next) => {
const { email, password } = req.body;
console.log(email, password);

if (!email || !password) {
  next(errorGene(400, 'Some required fields are missing'));
  // res.status(400).json({ message: 'Some required fields are missing' });
}
const { error } = schemaLogin.validate(req.body);
if (error) { next(errorGene(400, 'Invalid fields')); }
// res.status(400).json({ message: 'Invalid fields' });
next();
};

module.exports = authMiddleware;