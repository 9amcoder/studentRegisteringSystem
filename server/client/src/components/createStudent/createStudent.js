import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
  //useState() is a react hook and it updates date in text fild on front-end
  const [student, setStudent] = useState({

    studentNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phoneNumber: '',
    email: '',
    program: ''
  })
  const createStudent = () => {
    //from front-end the date goes to the back-end prot 5000
    axios.post('http://localhost:5000/students', student)
  }

  return (
    <>
      <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Student Number" variant="outlined" value={student.studentNumber} onChange={(event) => {
          setStudent({ ...student, studentNumber: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="First Name" variant="outlined" value={student.firstName} onChange={(event) => {
          setStudent({ ...student, firstName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" value={student.lastName} onChange={(event) => {
          setStudent({ ...student, lastName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Address" variant="outlined" value={student.address} onChange={(event) => {
          setStudent({ ...student, address: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="City" variant="outlined" value={student.city} onChange={(event) => {
          setStudent({ ...student, city: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={student.phoneNumber} onChange={(event) => {
          setStudent({ ...student, phoneNumber: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={student.email} onChange={(event) => {
          setStudent({ ...student, email: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Program" variant="outlined" value={student.program} onChange={(event) => {
          setStudent({ ...student, program: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick = {createStudent}>
        Create Student
      </Button>
    </form>
    </>
  );
}
