/**
 * @swagger
 * tags:
 *   name: Confrence
 *   description: API endpoints for Confrence
 */


/**
 * @swagger
 * /conf:
 *   get:
 *     tags: [Confrence]
 *     summary: Get all Confrerences
 *     description: Retrieve all Confrerences
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/confrence'
 *       400:
 *          description: Bad request
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *   post:
 *     tags: [Confrence]
 *     summary: Create a new Confrerence
 *     description: Create a new Confrerence
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/confrencesModel'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Success'
 *       400:
 *          description: Bad request
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /conf/{id}:
 *   get:
 *     tags: [Confrence]
 *     summary: Get a confrence by ID
 *     description: Retrieve a confrence by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: confrence ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return confrence
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/confrence'
 *       400:
 *         description: Bad request
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'    
 *   put:
 *     tags: [Confrence]
 *     summary: Update a confrence by ID
 *     description: Update a confrence by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: confrence ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/confrencesModel'
 *     responses:
 *       200:
 *         description: update confrence response
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Success'
 *       400:
 *         description: Bad request
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *   delete:
 *     tags: [Confrence]
 *     summary: Delete a confrence by ID
 *     description: Delete a confrence by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: confrence ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: delete confrence response
 *         content:
 *              application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Success'
 *       400:
 *         description: Bad request
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     confrencesModel:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *         email:
 *           type: string
 *     Error:
 *       type: object
 *       properties:
 *          error:
 *              type: string
 *     Success:
 *          type: object
 *          properties:
 *              success:
 *                  type: string
 *     confrence:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *              name:
 *                  type: string
 *              email:
 *                  type: string
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 */ 