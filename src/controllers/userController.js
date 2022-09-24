const userService = require('../service/userService');

const insertUser = async (req, res, next) => {
    console.log(req.body);
try {
  return res.status(201).json(await userService.createUser(req.body));
} catch (error) {
    console.log(error.message);
  next(error);
  }
};

module.exports = {
    insertUser,
};