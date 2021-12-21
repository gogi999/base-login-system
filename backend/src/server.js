import express from 'express';
import passport from 'passport';
import helmet from 'helmet';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import expressSanitizer from 'express-sanitizer';
import config from './config/config.js';
import userRoutes from './routes/user.routes.js';
import { passportConfig } from './utils/passport.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true
}));
if(process.env.NODE_ENV === 'production') app.use(helmet());

if (process.env.NODE_ENV === 'production') app.use(helmet());

app.use(passport.initialize());
passportConfig(passport);

app.use('/api/users', userRoutes);

export default app;
