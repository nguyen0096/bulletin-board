const express = require('express');
const { bulletinController } = require('../../controllers');

const router = express.Router();

router.route('/')
    .post(bulletinController.createBulletin);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Bulletins
 *   description: Bulletin management and retrieval
 */

/**
 * @swagger
 * /bulletins:
 *   post:
 *     summary: Create a bulletin
 *     description: Create a bulletin
 *     tags: [Bulletins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               title: An example bulletin
 *               content: This is an example
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Bulletin'
 */