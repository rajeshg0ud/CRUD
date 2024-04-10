import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

function CreateStudentComponent() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        rollno: ''
    });

    // onSubmit handler
    const onSubmit = studentObject => {
        axios.post('http://localhost:4349/students/CreateStudentComponent', studentObject)
            .then(res => {
                if (res.status === 200){
                    alert('Student successfully created')
                    }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    };

    // Return student form
    return (
        <StudentForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Create Student
        </StudentForm>
    );
}

export default CreateStudentComponent;
