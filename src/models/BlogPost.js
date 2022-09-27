// const User = require('../models/User');

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        published: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updated: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {
        underscored: true,
        tabelaName: 'blog_posts',
        timestamps: false,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id',
        })
    }

    return BlogPost

}
