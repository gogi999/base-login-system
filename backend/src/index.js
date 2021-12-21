import mongoose from 'mongoose';
import app from './server.js';
import config from "./config/config.js";
import logger from './utils/logger.js';

mongoose.Promise = global.Promise;
mongoose
    .connect(config.mongo, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => logger.info('MongoDB succesfully connected!'))
    .catch(() => logger.error(`Error connecting to MongoDB ${config.mongo}!!!`));

app.listen(config.port, err => {
    if (err) return logger.error(err);
    logger.info(`Server started on port ${config.port}...`);
});
