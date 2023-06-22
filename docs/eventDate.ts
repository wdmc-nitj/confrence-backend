/**
 * @swagger
 * components:
 *   schemas:
 *     EventDate:
 *       type: object
 *       properties:
 *         confId:
 *           type: string
 *         title:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 *         sequence:
 *           type: integer
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

/**
 * @swagger
 * tags:
 *   name: EventDates
 *   description: API endpoints for managing event dates
 */

/**
 * @swagger
 * /eventDates/conference/{id}:
 *   get:
 *     summary: Get event dates by conference ID
 *     tags: [EventDates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the conference
 *     responses:
 *       200:
 *         description: List of event dates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EventDate'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates:
 *   get:
 *     summary: Get all event dates
 *     tags: [EventDates]
 *     responses:
 *       200:
 *         description: List of event dates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EventDate'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates/{id}:
 *   get:
 *     summary: Get an event date by ID
 *     tags: [EventDates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event date
 *     responses:
 *       200:
 *         description: The requested event date
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventDate'
 *       404:
 *         description: Event date not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates:
 *   post:
 *     summary: Create a new event date
 *     tags: [EventDates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventDate'
 *     responses:
 *       200:
 *         description: The created event date
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventDate'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates/{id}:
 *   put:
 *     summary: Update an event date by ID
 *     tags: [EventDates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event date
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventDate'
 *     responses:
 *       200:
 *         description: The updated event date
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventDate'
 *       404:
 *         description: Event date not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /eventDates/{id}:
 *   delete:
 *     summary: Delete an event date by ID
 *     tags: [EventDates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event date
 *     responses:
 *       200:
 *         description: Event date deleted successfully
 *       404:
 *         description: Event date not found
 *       500:
 *         description: Internal server error
 */
