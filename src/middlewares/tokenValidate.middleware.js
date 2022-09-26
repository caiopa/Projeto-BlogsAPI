// const errorGene = require('../utils/errorGene');

const tokenValidateMiddleware = async (req, res, next) => {
    const { token } = req.headers;
        if (token === undefined || !token) {
            return res.status(401).json({ message: 'Token not found' });
          }
      next();
};

module.exports = tokenValidateMiddleware;