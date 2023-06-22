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


