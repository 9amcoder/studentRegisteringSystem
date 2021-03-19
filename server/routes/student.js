import express from 'express'
import { getStudents, createStudent } from '../controllers/student.js'
import cors from 'cors';

const router = express.Router();

router.get('/',cors(),getStudents);
router.post('/', createStudent)

export default router;