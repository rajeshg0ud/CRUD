import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        rollno: Yup.number().required("Required"),
    });

    return (
        <div className="form-wrapper">
            <Formik initialValues={props.initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" component="span" className="d-block invalid-feedback" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Field name="email" type="text" className="form-control" />
                        <ErrorMessage name="email" component="span" className="d-block invalid-feedback" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="rollno">Roll No</FormLabel>
                        <Field name="rollno" type="number" className="form-control" />
                        <ErrorMessage name="rollno" component="span" className="d-block invalid-feedback" />
                    </FormGroup>
                    <Button variant="primary" type="submit">{props.children}</Button>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;
