const UserSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tabelaName: 'users',
        underscored: true,
        timestamps: false,
    });

    return User

}

module.exports = UserSchema

