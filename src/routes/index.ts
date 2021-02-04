import { Router } from 'express';
import loginRouter from './login.routes';

const routes = Router();

routes.use('/usuarios', loginRouter);

export default routes;