const userService = require('../service/userService');
const { User } = require('../models');
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
  const token = req.headers.authorization;
  try {
    await authenticateToken(token);
    const allUsers = await userService.listUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const findUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    await authenticateToken(token);

    const isValidId = await User.findOne({ where: { id } });

   if (!isValidId) {
   return res.status(404).json({ message: 'User does not exist' });
  }
    const user = await userService.findUser(id);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    insertUser,
    getUsers,
    findUserById,
};