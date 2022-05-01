const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bulletinService } = require('../services');

const createBulletin = catchAsync(async (req, res) => {
    const user = await bulletinService.createBulletin(req.body);
    res.status(httpStatus.CREATED).send(user);
});

module.exports = {
    createBulletin,
};
