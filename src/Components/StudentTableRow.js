import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
    const { _id, name, email, rollno } = props.obj;

    
    const deleteStudent = () => {
        axios.delete(`http://localhost:4349/students/DeleteStudent/${_id}`)
            .then((res) => {
                // This block will be executed if the server responds with a success status code (2xx)
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    window.location.reload();
                    
                console.log("done");
                } else {
                    // Handle unexpected status codes
                    Promise.reject();
                    
                console.log("notdone");
                }
            })
            .catch((err) => {
                // This block will be executed if an error occurs (e.g., network error or server error)
                alert("Something went wrong");
                console.log(err);
            });
    };
    
    
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <Link className="edit-link" to={`/EditStudent/${_id}`}>
                    Edit
                </Link>
                <Button onClick={deleteStudent} size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default StudentTableRow;
