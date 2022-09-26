// const errorGene = require('../utils/errorGene');
// const { authenticateToken } = require('../utils/JWT');

const tokenValidateMiddleware = async (req, res, next) => {
    const token = req.headers;
        if (!token || token.length <= 0) {
            return res.status(401).json({ message: 'Token not found' });
          }
      next();
};

module.exports = tokenValidateMiddleware;