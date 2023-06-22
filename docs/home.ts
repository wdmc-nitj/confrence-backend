/**
 * @swagger
 * tags:
 *   name: Home
 *   description: API endpoints for Home
 */


/**
 * @swagger 
 * /home:
 *  get:
 *    tags: [Home]
 *    description: Get all Home
 *    responses:
 *      200:
 *        description: Success response
 *        content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Home'
 *      500:
 *       description: Internal server error 
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *  post:
 *    tags: [Home]
 *    summary: Create a new Home
 *    description: Create a new Home
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/HomeModel'
 *    responses:
 *     201:
 *      description: success response
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Success'
 *     400:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Error'
 *     500:
 *        description: Internal server error
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 * 
 * 
 */


/**
 * @swagger
 * /home/{id}:
 *   get:
 *    tags: [Home]
 *    description: Get Home By Id
 *    summary: Get Home By Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Home Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Home'
 *      500:
 *        description: Internal server error
 *        content:
 *           application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *   put:
 *    tags: [Home]
 *    summary: Update Home
 *    description: Update Home
 *    parameters:
 *        - name: id
 *          in: path
 *          description: Home Id
 *          required: true
 *          schema:
 *            type: string  
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Home'
 *    responses:
 *     200:
 *      description: Success
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Success'
 *     500:
 *      description: Internal server error
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Error'
 *     400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *   delete:
 *    tags: [Home]
 *    summary: Delete Home
 *    description: Delete Home
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Home Id
 *       required: true
 *       schema:
 *         type: string
 *    responses:
 *     200:
 *      description: Success
 *      content:
 *        application/json:
 *            schema:
 *              $ref: '#/components/schemas/Success'
 *     400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *     500:
 *      description: Internal server error
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/Error'
 * 
 *     
 */

/**
 * @swagger
 * /home/conference/{id}:
 *   get:
 *    tags: [Home]
 *    description: Get Home By confrence Id
 *    summary: Get Home By confrence Id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Home Id
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Home'
 *      500:
 *        description: Internal server error
 *        content:
 *           application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 * 
 *     
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Home:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         confId:
 *           type: string
 *         confName:
 *           type: string
 *         confStartDate:
 *           type: string
 *           format: date-time
 *         confEndDate:
 *            type: string
 *            format: date-time
 *         aboutConf:
 *            type: string
 *         aboutIns:
 *            type: string
 *            nullable: true
 *         youtubeLink:
 *            type: string
 *            nullable: true
 *         instaLink:
 *            type: string
 *            nullable: true
 *         facebookLink:
 *            type: string
 *            nullable: true
 *         twitterLink:
 *            type: string
 *            nullable: true
 *         logo:
 *            type: string
 *            nullable: true
 *         shortName:
 *            type: string
 *            nullable: true
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
 *     HomeModel:
 *        type: object
 *        properties:
 *          confId:
 *            type: string
 *          confName:
 *            type: string
 *          confStartDate:
 *            type: string
 *            format: date-time
 *          confEndDate:
 *            type: string
 *            format: date-time
 *          aboutConf:
 *            type: string
 *          aboutIns:
 *            type: string
 *            nullable: true
 *          youtubeLink:
 *            type: string
 *            nullable: true
 *          instaLink:
 *            type: string
 *            nullable: true
 *          facebookLink:
 *            type: string
 *            nullable: true
 *          twitterLink:
 *            type: string
 *            nullable: true
 *          logo:
 *            type: string
 *            nullable: true
 *          shortName:
 *            type: string
 *            nullable: true
 */