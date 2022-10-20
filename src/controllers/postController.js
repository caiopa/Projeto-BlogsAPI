const { authenticateToken } = require('../utils/JWT');
const postService = require('../service/postService');

const getAllPost = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
      await authenticateToken(token);

      const allPost = await postService.listPosts();

      return res.status(200).json(allPost);
    } catch (error) {
      next(error);
    }
};

module.exports = { getAllPost };
