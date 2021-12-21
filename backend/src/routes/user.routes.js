import express from 'express';
import passport from 'passport';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', userCtrl.register);
router.post('/login', authCtrl.login);
router.get('/current', passport.authenticate('jwt', { session: false }), authCtrl.current);

export default router;
