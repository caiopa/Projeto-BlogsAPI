const { authenticateToken } = require('../utils/JWT');
const postService = require('../service/postService');

const getAllPost = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      await authenticateToken(token);
      const allPost = await postService.listPosts();
      return res.status(200).json(allPost);
    } catch (error) {
      next(error);
    }
};

module.exports = { getAllPost };
