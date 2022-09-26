const userService = require('../service/userService');
const { authenticateToken } = require('../utils/JWT');

const insertUser = async (req, res, next) => {
try {
  return res.status(201).json(await userService.createUser(req.body));
} catch (error) {
  next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const { token } = req.headers;
  
    await authenticateToken(token);
    return res.status(200).json(await userService.listUsers());
  } catch (error) {
    next(error);
  }
};

module.exports = {
    insertUser,
    getUsers,
};