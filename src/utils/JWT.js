require('dotenv').config();
const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = () => {
    const payload = {
    
  };
    const jwtConfig = {
    expiresIn: '10h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ

  return token;
};

module.exports = {
    generateToken,

};