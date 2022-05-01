const { Bulletin } = require('../models');

/**
 * Create a bulletin
 * @param {Object} bulletinBody
 * @returns {Promise<Bulletin>}
 */
const createBulletin = async (bulletinBody) => {
    return Bulletin.create(bulletinBody);
};

/**
 * Query for bulletins
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBulletins = async (filter, options) => {
    const bulletins = await Bulletin.paginate(filter, options);
    return bulletins;
};

/**
 * Get bulletin by id
 * @param {ObjectId} id
 * @returns {Promise<Bulletin>}
 */
const getBulletinById = async (id) => {
    return Bulletin.findById(id);
};

/**
 * Update bulletin by id
 * @param {ObjectId} bulletinId
 * @param {Object} updateBody
 * @returns {Promise<Bulletin>}
 */
const updateBulletinById = async (bulletinId, updateBody) => {
    const bulletin = await getBulletinById(bulletinId);
    if (!bulletin) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bulletin not found');
    }
    Object.assign(bulletin, updateBody);
    await bulletin.save();
    return bulletin;
};

/**
 * Delete bulletin by id
 * @param {ObjectId} bulletinId
 * @returns {Promise<Bulletin>}
 */
const deleteBulletinById = async (bulletinId) => {
    const bulletin = await getBulletinById(bulletinId);
    if (!bulletin) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bulletin not found');
    }
    await bulletin.remove();
    return bulletin;
};

module.exports = {
    createBulletin,
    queryBulletins,
    updateBulletinById,
    deleteBulletinById,
};