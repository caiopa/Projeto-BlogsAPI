const userService = require('../service/userService');
const { authenticateToken } = require('../utils/JWT');
// const geneError = require('../utils/errorGene');

const insertUser = async (req, res, next) => {
try {
  return res.status(201).json(await userService.createUser(req.body));
} catch (error) {
  next(error);
  }
};

const getUsers = async (req, res, next) => {
  const { token } = req.headers;
  try {
    await authenticateToken(token);
    const allUsers = await userService.listUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    insertUser,
    getUsers,
};