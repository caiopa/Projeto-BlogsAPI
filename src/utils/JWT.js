require('dotenv').config();
const jwt = require('jsonwebtoken');
const geneError = require('./errorGene');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = ({ displayName, email }) => {
    const payload = {
    displayName,
    email,
  };
    const jwtConfig = {
    expiresIn: '10h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ

  return token;
};

const authenticateToken = async (token) => {
  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    return validateToken;
  } catch (error) {
    throw geneError(401, 'Expired or invalid token');
  }
};

module.exports = {
    generateToken,
    authenticateToken,

};