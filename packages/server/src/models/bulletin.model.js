const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bulletinSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

// add plugin that converts mongoose to json
bulletinSchema.plugin(toJSON);
bulletinSchema.plugin(paginate);

/**
 * @typedef Bulletin
 */
const Bulletin = mongoose.model('Bulletin', bulletinSchema);

module.exports = Bulletin;