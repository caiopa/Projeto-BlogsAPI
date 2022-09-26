const { Category } = require('../models');
// const { generateToken } = require('../utils/JWT');
// const erroGene = require('../utils/errorGene');

const createCategory = async ({ name }) => {
    try {
        console.log('name', name);
        const newCategory = await Category.create({ name });
        console.log('aquiService', newCategory);
        return newCategory;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = { createCategory };