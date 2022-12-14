const { Category } = require('../models');
// const { generateToken } = require('../utils/JWT');
// const erroGene = require('../utils/errorGene');

const createCategory = async ({ name }) => {
    try {
        const newCategory = await Category.create({ name });
        return newCategory;
    } catch (error) {
        console.error(error.message);
    }
};

const getCategories = async () => {
    try {
        const allCategories = await Category.findAll();
        return allCategories;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = { createCategory, getCategories };