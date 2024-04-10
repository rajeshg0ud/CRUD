import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditStudentComponent = (props) => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        rollno: "",
    });

    
    const { id } = useParams();

    // onSubmit handler
    const onSubmit = (studentObject) => {
        console.log(props);
        axios.put(`http://localhost:4349/students/UpdateStudent/${id}`, studentObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                    props.history.push("/StudentList");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    // Load data from server and reinitialize student form
    useEffect(() => {
        axios.get(`http://localhost:4349/students/UpdateStudent/${id}`)
            .then((res) => {
                const { name, email, rollno } = res.data;
                setFormValues({ name, email, rollno });
            })
            .catch((err) => console.log(err));
    }, []);

    

  console.log(id);
    // Return student form
    return (
        <StudentForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Update Student
        </StudentForm>
    );
};

export default EditStudentComponent;
