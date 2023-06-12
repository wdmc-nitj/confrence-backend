import express from 'express';
import CommitteesController from '../crud/committees';

const committeesRouter = express.Router();
const committeesController = new CommitteesController();

// GET /committees/conference/:id
committeesRouter.get('/conference/:id', committeesController.getCommitteesByConferenceId);

// GET /committees
committeesRouter.get('/', committeesController.getAllCommittees);

// GET /committees/:id
committeesRouter.get('/:id', committeesController.getCommitteeById);

// POST /committees
committeesRouter.post('/', committeesController.createCommittee);

// PUT /committees/:id
committeesRouter.put('/:id', committeesController.updateCommittee);

// DELETE /committees/:id
committeesRouter.delete('/:id', committeesController.deleteCommittee);

export default committeesRouter;

/**
 * @swagger
 * tags:
 *   name: Committees
 *   description: API endpoints for Committees
 */

/**
 * @swagger
 * /committees/conference/{id}:
 *   get:
 *     summary: Get committees by conference ID
 *     tags: [Committees]
 *     description: Retrieve committees based on the conference ID
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
 *         description: Committee not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /committees:
 *   get:
 *     tags: [Committees]
 *     summary: Get all committees
 *     description: Retrieve all committees
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 *   post:
 *     tags: [Committees]
 *     summary: Create a new committee
 *     description: Create a new committee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommitteesModel'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /committees/{id}:
 *   get:
 *     tags: [Committees]
 *     summary: Get a committee by ID
 *     description: Retrieve a committee by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Committee ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Committee not found
 *       500:
 *         description: Internal server error
 *   put:
 *     tags: [Committees]
 *     summary: Update a committee by ID
 *     description: Update a committee by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Committee ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommitteesModel'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Committee not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     tags: [Committees]
 *     summary: Delete a committee by ID
 *     description: Delete a committee by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Committee ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Committee not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CommitteesModel:
 *       type: object
 *       properties:
 *         ConfId:
 *           type: string
 *         Type:
 *           type: string
 *         Subtype:
 *           type: string
 *         Name:
 *           type: string
 *         Designation:
 *           type: string
 *         Institute:
 *           type: string
 *         ProfileLink:
 *           type: string
 *         ImgLink:
 *           type: string
 *         sequence:
 *           type: number
 *         feature:
 *           type: boolean
 */
