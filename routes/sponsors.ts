import express from 'express';
import SponsorsController from '../crud/sponsors';

const sponsorsRouter = express.Router();
const sponsorsController = new SponsorsController();

// GET /sponsors/conference/:id
sponsorsRouter.get(
    '/conference/:id',
    sponsorsController.getSponsorsByConferenceId,
);

// GET /sponsors
sponsorsRouter.get('/', sponsorsController.getAllSponsors);

// GET /sponsors/:id
sponsorsRouter.get('/:id', sponsorsController.getSponsorById);

// POST /sponsors
sponsorsRouter.post('/', sponsorsController.createSponsor);

// PUT /sponsors/:id
sponsorsRouter.put('/:id', sponsorsController.updateSponsor);

// DELETE /sponsors/:id
sponsorsRouter.delete('/:id', sponsorsController.deleteSponsor);

export default sponsorsRouter;


