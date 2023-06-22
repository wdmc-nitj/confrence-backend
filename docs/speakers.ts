/**
 * @swagger
 * tags:
 *   name: Speakers
 *   description: API endpoints for Speakers
 */

/**
 * @swagger
 * /speakers/conference/{id}:
 *   get:
 *     summary: Get speakers by conference ID
 *     tags: [Speakers]
 *     description: Retrieve speakers based on the conference ID
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
 *         description: Speaker not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /speakers:
 *   get:
 *     tags: [Speakers]
 *     summary: Get all speakers
 *     description: Retrieve all speakers
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 *   post:
 *     tags: [Speakers]
 *     summary: Create a new speaker
 *     description: Create a new speaker
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SpeakersModel'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /speakers/{id}:
 *   get:
 *     tags: [Speakers]
 *     summary: Get a speaker by ID
 *     description: Retrieve a speaker by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Speaker ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Speaker not found
 *       500:
 *         description: Internal server error
 *   put:
 *     tags: [Speakers]
 *     summary: Update a speaker by ID
 *     description: Update a speaker by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Speaker ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SpeakersModel'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Speaker not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     tags: [Speakers]
 *     summary: Delete a speaker by ID
 *     description: Delete a speaker by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Speaker ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Speaker not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SpeakersModel:
 *       type: object
 *       properties:
 *         ConfId:
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
 *         TalkType:
 *           type: string
 *         TalkTitle:
 *           type: string
 *         Abstract:
 *           type: string
 *         Bio:
 *           type: string
 *         sequence:
 *           type: number
 *         feature:
 *           type: boolean
 */
