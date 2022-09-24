const { User } = require('../models');
const { generateToken } = require('../utils/JWT');
const erroGene = require('../utils/errorGene');

const authLogin = async ({ email, password }) => {
     const user = await User.findOne({
          attributes: ['displayName', 'email'],
          where: { email, password } });

     if (!user) {
         throw erroGene(400, 'Invalid fields');
     }

     const token = generateToken(user.dataValues);
     return { token };
};

module.exports = { authLogin };