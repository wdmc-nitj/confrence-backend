import express from 'express';
import SpeakersController from '../crud/speakers';

const speakersRouter = express.Router();
const speakersController = new SpeakersController();

// GET /speakers/conference/:id
speakersRouter.get('/conference/:id', speakersController.getSpeakersByConferenceId);

// GET /speakers
speakersRouter.get('/', speakersController.getAllSpeakers);

// GET /speakers/:id
speakersRouter.get('/:id', speakersController.getSpeakerById);

// POST /speakers
speakersRouter.post('/', speakersController.createSpeaker);

// PUT /speakers/:id
speakersRouter.put('/:id', speakersController.updateSpeaker);

// DELETE /speakers/:id
speakersRouter.delete('/:id', speakersController.deleteSpeaker);

export default speakersRouter;

