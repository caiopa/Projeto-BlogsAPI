module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostsCategory', {
        postId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, },

        categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, }
        
    }, {
        tabelaName: 'posts_categories',
        underscored: true,
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        })
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        })
    }

    return PostCategory

}
