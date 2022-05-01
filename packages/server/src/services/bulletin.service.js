const { Bulletin } = require('../models');

/**
 * Create a bulletin
 * @param {Object} bulletinBody
 * @returns {Promise<Bulletin>}
 */
const createBulletin = async (bulletinBody) => {
    return Bulletin.create(bulletinBody);
};

module.exports = {
    createBulletin,
};