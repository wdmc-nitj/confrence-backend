import express from 'express';
import EventDateController from '../crud/eventDate';

const eventDateRouter = express.Router();
const eventDateController = new EventDateController();

// GET /eventDates/conference/:id
eventDateRouter.get(
    '/conference/:id',
    eventDateController.getEventDatesByConferenceId,
);

// GET /eventDates
eventDateRouter.get('/', eventDateController.getAllEventDates);

// GET /eventDates/:id
eventDateRouter.get('/:id', eventDateController.getEventDateById);

// POST /eventDates
eventDateRouter.post('/', eventDateController.createEventDate);

// PUT /eventDates/:id
eventDateRouter.put('/:id', eventDateController.updateEventDate);

// DELETE /eventDates/:id
eventDateRouter.delete('/:id', eventDateController.deleteEventDate);

export default eventDateRouter;

/**
 * @swagger
 * tags:
 *   name: EventDates
 *   description: API endpoints for Event Dates
 */

/**
 * @swagger
 * /eventDates/conference/{id}:
 *   get:
 *     summary: Get event dates by conference ID
 *     tags: [EventDates]
 *     description: Retrieve event dates based on the conference ID
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
 *         description: Event dates not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates:
 *   get:
 *     tags: [EventDates]
 *     summary: Get all event dates
 *     description: Retrieve all event dates
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 *   post:
 *     tags: [EventDates]
 *     summary: Create a new event date
 *     description: Create a new event date
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventDatesModel'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates/{id}:
 *   get:
 *     tags: [EventDates]
 *     summary: Get an event date by ID
 *     description: Retrieve an event date by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Event date ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Event date not found
 *       500:
 *         description: Internal server error
 *   put:
 *     tags: [EventDates]
 *     summary: Update an event date by ID
 *     description: Update an event date by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Event date ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventDatesModel'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Event date not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     tags: [EventDates]
 *     summary: Delete an event date by ID
 *     description: Delete an event date by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Event date ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Event date not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     EventDatesModel:
 *       type: object
 *       properties:
 *         confId:
 *           type: string
 *         title:
 *           type: string
 *        date:
 *          type: string
 *         format: date-time
 *         sequence:
 *           type: number
 *         extended:
 *           type: boolean
 *         newDate:
 *           type: string
 *           format: date-time
 *         completed:
 *           type: boolean
 *         featured:
 *           type: boolean
 */
