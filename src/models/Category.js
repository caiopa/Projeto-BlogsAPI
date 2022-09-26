const CategorySchema = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: DataTypes.STRING,
    }, {
        tabelaName: 'categories',
        underscored: true,
        timestamps: false,
    });

    return Category

}

module.exports = CategorySchema
