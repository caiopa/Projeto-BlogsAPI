const categoryService = require('../service/categoryService');
const { authenticateToken } = require('../utils/JWT');

const insertCategory = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      await authenticateToken(token);
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: '"name" is required' });
      }
      const categoryId = await categoryService.createCategory(req.body);

      return res.status(201).json(categoryId);
    } catch (error) {
      next(error);
      }
    };

module.exports = { insertCategory };