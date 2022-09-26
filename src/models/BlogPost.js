// const User = require('../models/User');

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updated: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {
        tabelaName: 'blog_posts',
        underscored: true,
        timestamps: false,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        })
    }

    return BlogPost

}
