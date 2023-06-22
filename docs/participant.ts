/**
 * @swagger
 * tags:
 *   name: Participant
 *   description: API endpoints for participant
 */


/**
 * @swagger
 * /participant:
 *   get:
 *     tags: [Participant]
 *     description: Get all Participants
 *     responses:
 *       200:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Participant'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   post:
 *     tags: [Participant]
 *     summary: Create a new participant
 *     description: Create a new participant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participant'
 *     responses:
 *       201:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */


/**
 * @swagger
 * /participant/{id}:
 *   get:
 *     tags: [Participant]
 *     description: Get participant by ID
 *     summary: Get participant by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Participant ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participant'
 *       400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   put:
 *     tags: [Participant]
 *     summary: Update participant
 *     description: Update participant
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Participant ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participant'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   delete:
 *     tags: [Participant]
 *     summary: Delete participant 
 *     description: Delete participant 
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Participant ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /participant/conference/{id}:
 *   get:
 *    tags: [Participant]
 *    description: Get Participant by confrence ID
 *    summary: Get Participant by confrence ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Confrence ID
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Participant'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      500:
 *        description: Internal server error
 *        content:
 *           application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Participant:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         confId:
 *          type: string
 *         authorName:
 *           type: string
 *         authorDesignation:
 *           type: string
 *         authorInstitute:
 *           type: string
 *         paperTitle:
 *           type: string
 *         paperId:
 *           type: string
 *         createdAt:
 *            type: string
 *            format: date-time
 *         updatedAt:
 *            type: string
 *            format: date-time
 *     Error:
 *        type: object
 *        properties:
 *          error:
 *            type: string
 *     Success:
 *        type: object
 *        properties:
 *          success:
 *            type: string
 *     ParticipantModel:
 *        type: object
 *        properties:
 *          confId:
 *            type: string
 *          authorName:
 *            type: string
 *          authorDesignation:
 *            type: string
 *          authorInstitute:
 *            type: string
 *          paperTitle:
 *            type: string
 *          paperId:
 *            type: string
 */