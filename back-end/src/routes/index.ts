import { Router } from 'express';
import appointmentRouter from './appointments.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter)

export default routes;