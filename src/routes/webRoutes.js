import { Router } from 'express';
import webController from '../controllers/WebController.js';

const webRouter = Router();

webRouter.get('/', webController.index);

export default webRouter;