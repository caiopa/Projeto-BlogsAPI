const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tabelaName: 'users',
        underscored: true
    });

    return User

}

module.exports = User;