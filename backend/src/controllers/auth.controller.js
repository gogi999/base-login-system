import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import logger from '../utils/logger.js';
import User from '../models/user.model.js';
import validateLoginInput from '../validation/login.js';

const login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) return res.status(400).json(errors);

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User
        .findOne({ email })
        .then(user => {
            // Check if user exists
            if(!user) return res.status(404).json({ 
                email: "User not found!" 
            });

            // Check password
            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { 
                            id: user.id, 
                            name: user.name
                        };

                        jwt.sign(
                            payload,
                            config.secret,
                            { expiresIn: 1200 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        return res.status(400).json({ 
                            password: "Password incorrect" 
                        });
                    }
            });
        });
}

const current = (req, res) => {
    if(!req.user) return res.status(403).json({});

    User
        .find({ _id: req.user._id })
        .lean()
        .then(results => res.json(results))
        .catch(err => {
            res.status(500).json({});
        });
}

export default {
    login, 
    current
}
