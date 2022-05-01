const express = require('express');
const { bulletinController } = require('../../controllers');

const router = express.Router();

router.route('/')
    .post(bulletinController.createBulletin)
    .get(bulletinController.getBulletins);

router.route('/:bulletinId')
    .patch(bulletinController.updateBulletin)
    .delete(bulletinController.deleteBulletin)

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
 *
 *   get:
 *     summary: Get all bulletins
 *     description: Get all buletins
 *     tags: [Bulletins]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Bulletin title
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         description: Bulletin content
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of bulletins
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Bulletin'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 */

/**
 * @swagger
 * /bulletins/{id}:
 *   patch:
 *     summary: Update a bulletin
 *     description: Update a bulletin
 *     tags: [Bulletins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Bulletin id
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
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Bulletin'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 *   delete:
 *     summary: Delete a bulletin
 *     description: Delete a bulletin
 *     tags: [Bulletins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Bulletin id
 *     responses:
 *       "200":
 *         description: No content
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */