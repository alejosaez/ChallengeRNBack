import { Router } from 'express';
import { createCombinationController, getAllCombinationsController } from '../controllers/combinationController';

const combinationRouter = Router();

combinationRouter.post('/combinations', createCombinationController);
combinationRouter.get('/combinations', getAllCombinationsController);

export default combinationRouter;
