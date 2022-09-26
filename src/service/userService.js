const { User } = require('../models');
const { generateToken } = require('../utils/JWT');
const erroGene = require('../utils/errorGene');

const createUser = async ({ displayName, email, password, image }) => {
    const findUser = await User.findOne({
        where: { email } });

    const user = await User.create({ displayName, email, password, image });

     if (!user) {
        throw erroGene(400, 'Invalid fields');
    }

    if (findUser) {
        throw erroGene(409, 'User already registered');
    }

    const token = generateToken(user.dataValues);
    return { token };
};

const listUsers = async () => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['password'],
            },
        });
        return users;
    } catch (error) {
        console.error(error);
    }
};

module.exports = { createUser, listUsers };