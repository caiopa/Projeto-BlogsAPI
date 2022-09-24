const authService = require('../service/authLogin');

const login = async (req, res, next) => {
try {
  const auth = await authService.authLogin(req.body);
  req.user = auth;
  return res.status(200).json(auth);
} catch (error) {
  next();
  }
};

module.exports = {
    login,
};