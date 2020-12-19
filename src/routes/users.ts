import * as express from 'express';

import { getUser } from './controller/users';

const router: express.Router = express.Router();

/**
 * @swagger
 * definitions:
 *   User:
 *     type: "object"
 *     required:
 *       - "email"
 *       - "name"
 *     properties:
 *       email:
 *         type: "string"
 *         format: "email"
 *       name:
 *         type: "string"
 *         example: "hong-gil-dong"
 *       nickname:
 *         type: "string"
 *         example: "hong-gil-dong"
 */

/**
 * @swagger
 * /user/:userId:
 *   get:
 *     summary: "Returns User"
 *     tags:
 *       - "User"
 *     consumes:
 *       "application/json"
 *     produces:
 *       "application/json"
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "User object that needs to be added to the store"
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *     responses:
 *       "200":
 *         description: "User Data"
 */

router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/:userId', getUser);

export default router;
