import express from 'express';
import AwardsController from '../crud/awards';

const awardsRouter = express.Router();
const awardsController = new AwardsController();

// GET /awards/conference/:id
awardsRouter.get('/conference/:id', awardsController.getAwardsByConferenceId);

// GET /awards
awardsRouter.get('/', awardsController.getAllAwards);

// GET /awards/:id
awardsRouter.get('/:id', awardsController.getAwardById);

// POST /awards
awardsRouter.post('/', awardsController.createAward);

// PUT /awards/:id
awardsRouter.put('/:id', awardsController.updateAward);

// DELETE /awards/:id
awardsRouter.delete('/:id', awardsController.deleteAward);

export default awardsRouter;

/**
 * @swagger
 * tags:
 *   name: Awards
 *   description: API endpoints for Awards
 */

/**
 * @swagger
 * /awards/conference/{id}:
 *   get:
 *     summary: Get awards by conference ID
 *     tags: [Awards]
 *     description: Retrieve awards based on the conference ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Conference ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Award not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /awards:
 *   get:
 *     tags: [Awards]
 *     summary: Get all awards
 *     description: Retrieve all awards
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 *   post:
 *     tags: [Awards]
 *     summary: Create a new award
 *     description: Create a new award
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AwardsModel'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /awards/{id}:
 *   get:
 *     tags: [Awards]
 *     summary: Get an award by ID
 *     description: Retrieve an award by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Award ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Award not found
 *       500:
 *         description: Internal server error
 *   put:
 *     tags: [Awards]
 *     summary: Update an award by ID
 *     description: Update an award by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Award ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AwardsModel'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Award not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     tags: [Awards]
 *     summary: Delete an award by ID
 *     description: Delete an award by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Award ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Award not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AwardsModel:
 *       type: object
 *       properties:
 *         ConfId:
 *           type: string
 *         title1:
 *           type: string
 *         title2:
 *           type: string
 *         description:
 *           type: string
 *         sequence:
 *           type: number
 *         feature:
 *           type: boolean
 *         new:
 *           type: boolean
 *         hidden:
 *           type: boolean
 *         link:
 *           type: string
 */
