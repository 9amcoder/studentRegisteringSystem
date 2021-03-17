import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    studentNumber: Number,
    firstName: String,
    lastName: String,
    address: String,
    city:String,
    phoneNumber: Number,
    email: String,
    program: String
});

const student = mongoose.model('student',studentSchema);

export default student;