const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { bulletinService } = require('../services');

const createBulletin = catchAsync(async (req, res) => {
    const user = await bulletinService.createBulletin(req.body);
    res.status(httpStatus.CREATED).send(user);
});

const getBulletins = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title', 'content']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await bulletinService.queryBulletins(filter, options);
    res.send(result);
});

const updateBulletin = catchAsync(async (req, res) => {
    const bulletin = await bulletinService.updateBulletinById(req.params.bulletinId, req.body);
    res.send(bulletin);
});

const deleteBulletin = catchAsync(async (req, res) => {
    await bulletinService.deleteBulletinById(req.params.bulletinId);
    res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    createBulletin,
    getBulletins,
    updateBulletin,
    deleteBulletin,
};
