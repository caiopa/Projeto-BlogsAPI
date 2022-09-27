const { BlogPost, User, Category } = require('../models');

const listPosts = async () => {
    try {
        const posts = await BlogPost.findAll({
            attributes: { exclude: ['user_id'] },
            include: [
               { model: User, as: 'user', attributes: { exclude: ['password'] } },
               { model: Category, as: 'categories' },      
            ],
        });
        return posts;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = { listPosts };