import { Router } from 'express';
import WebController from '../controllers/WebController.js';

const webRouter = Router();

webRouter.get('/', WebController.renderIndex);

export default webRouter;