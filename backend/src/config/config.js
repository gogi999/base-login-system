import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 5000,
    mongo: process.env.MONGO_URI || 'mongodb://localhost:27017/base-auth-db',
    secret: process.env.JWT_SECRET || 'my-ultra-supersonic-turbo-secure-secret'
}

export default config;
