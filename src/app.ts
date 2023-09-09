import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import CategoryRoute from './routes/CategoryRoute';
import CompanyRoute from './routes/CompanyRoute';
import StampRoute from './routes/StampRoute';
import UserRoute from './routes/UserRoute';

const app = express();
app.use(express.json());
app.use(CompanyRoute);
app.use(CategoryRoute);
app.use(StampRoute);
app.use(UserRoute);
app.use(errorHandler);

export default app;