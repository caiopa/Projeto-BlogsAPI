const userService = require('../service/userService');

const insertUser = async (req, res, next) => {
try {
  return res.status(201).json(await userService.createUser(req.body));
} catch (error) {
  next(error);
  }
};

module.exports = {
    insertUser,
};