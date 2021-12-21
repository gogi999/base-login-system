import mongoose from 'mongoose';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.model.js';
import config from '../config/config.js';
import logger from '../utils/logger.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret,
    passReqToCallback: true
};

export const passportConfig = (passport) => {
    passport.use(
        new JwtStrategy(opts, (req, jwt_payload, done) => {
            User
                .findById(jwt_payload.id)
                .then((user) => {
                    if (user) {
                        req.user = user;
                        return done(null, user);
                    }

                    return done(null, false);
                })
                .catch((err) => logger.error(err.message));
        })
    );
}
