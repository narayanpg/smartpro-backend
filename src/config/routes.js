import express from 'express';
import residentController from '../api/controllers/resident.controller';

export const router = express.Router();

// Residents
router.get('/residents', residentController.findAll);
router.get('/residents/:id', residentController.findOne);
router.delete('/residents/:id', residentController.delete);
router.put('/residents/:id', residentController.update);
router.post('/residents', residentController.create);