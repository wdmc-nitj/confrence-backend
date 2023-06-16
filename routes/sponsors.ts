import express from 'express';
import SponsorsController from '../crud/sponsors';

const sponsorsRouter = express.Router();
const sponsorsController = new SponsorsController();

// GET /sponsors/conference/:id
sponsorsRouter.get(
    '/conference/:id',
    sponsorsController.getSponsorsByConferenceId,
);

// GET /sponsors
sponsorsRouter.get('/', sponsorsController.getAllSponsors);

// GET /sponsors/:id
sponsorsRouter.get('/:id', sponsorsController.getSponsorById);

// POST /sponsors
sponsorsRouter.post('/', sponsorsController.createSponsor);

// PUT /sponsors/:id
sponsorsRouter.put('/:id', sponsorsController.updateSponsor);

// DELETE /sponsors/:id
sponsorsRouter.delete('/:id', sponsorsController.deleteSponsor);

export default sponsorsRouter;

/**
 * @swagger
 * tags:
 *   name: Sponsors
 *   description: API endpoints for Sponsors
 */

/**
 * @swagger
 * /sponsors/conference/{id}:
 *   get:
 *     summary: Get sponsors by conference ID
 *     tags: [Sponsors]
 *     description: Retrieve sponsors based on the conference ID
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
 *         description: Sponsor not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /sponsors:
 *   get:
 *     tags: [Sponsors]
 *     summary: Get all sponsors
 *     description: Retrieve all sponsors
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 *   post:
 *     tags: [Sponsors]
 *     summary: Create a new sponsor
 *     description: Create a new sponsor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SponsorsModel'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /sponsors/{id}:
 *   get:
 *     tags: [Sponsors]
 *     summary: Get a sponsor by ID
 *     description: Retrieve a sponsor by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Sponsor ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Sponsor not found
 *       500:
 *         description: Internal server error
 *   put:
 *     tags: [Sponsors]
 *     summary: Update a sponsor by ID
 *     description: Update a sponsor by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Sponsor ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SponsorsModel'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Sponsor not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     tags: [Sponsors]
 *     summary: Delete a sponsor by ID
 *     description: Delete a sponsor by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Sponsor ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Sponsor not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SponsorsModel:
 *       type: object
 *       properties:
 *         confId:
 *           type: string
 *         name:
 *           type: string
 *         type:
 *           type: string
 *         logo:
 *           type: string
 *         sequence:
 *           type: number
 *         featured:
 *           type: boolean
 */
