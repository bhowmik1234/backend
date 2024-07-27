import express from 'express';
import { deleteUser, getUser, getallUsers, newUser } from '../controllers/user.js';
import { adminOnly } from '../middlewares/auth.js';

const router = express.Router();

// route ~ /api/v1/user/new
router.post('/new', newUser);

// route ~ /api/v1/user/all
router.get('/all', adminOnly, getallUsers);

// route ~ /api/v1/user/{dynamic id}
// router.get('/:id', adminOnly, getAllUser);
router.route('/:id').get(getUser).delete(adminOnly, deleteUser);


export default router;
