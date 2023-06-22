import express from 'express';
import EventDateController from '../crud/eventDate';

const eventDateRouter = express.Router();
const eventDateController = new EventDateController();

// GET /eventDates/conference/:id
eventDateRouter.get(
    '/conference/:id',
    eventDateController.getEventDatesByConferenceId,
);

// GET /eventDates
eventDateRouter.get('/', eventDateController.getAllEventDates);

// GET /eventDates/:id
eventDateRouter.get('/:id', eventDateController.getEventDateById);

// POST /eventDates
eventDateRouter.post('/', eventDateController.createEventDate);

// PUT /eventDates/:id
eventDateRouter.put('/:id', eventDateController.updateEventDate);

// DELETE /eventDates/:id
eventDateRouter.delete('/:id', eventDateController.deleteEventDate);

export default eventDateRouter;

