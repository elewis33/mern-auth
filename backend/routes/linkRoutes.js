import express from 'express';
const router = express.Router();

import { 
    authUser,
    registerUser, 
    logoutUser,
    getUserProfile,
    updateUserProfile
 } from '../controllers/userController.js';
 
 import {protect} from '../middleWare/authMiddleware.js';

router.post('/link/delete', deleteLink);
router.post('/link/add', addLink);
router.post('/link/update', updateLink);
router.route('/link/view'), viewLink);

export default  router;