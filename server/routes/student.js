import express from 'express'
import { getStudents, createStudent, deleteStudent } from '../controllers/student.js'
import cors from 'cors';

const router = express.Router();

router.get('/',cors(),getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);

export default router;