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


