import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import StudentService from "../../service/StudentService";

const ViewStudent = () => {
  const [student, setStudent] = useState([]);

  console.log(student);

  useEffect(() => {
    StudentService.getAllStudent()
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteStudent = (studentid) => {
    StudentService.deleteStudent(studentid)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container_viewstudent">
      <h3 className="text-center viewstudenthaead">Students Details</h3>
      <div className="row">
        <Table striped bordered hover size="sm" className="table_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {student.map((stu) => {
            return (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.firstName}</td>
                <td>{stu.lastName}</td>
                <td>{stu.emailId}</td>
                <td>
                  <Link to={`/editstudent/${stu.id}`}>
                    <button type="button" class="btn btn-primary">
                      Edit Details
                    </button>
                  </Link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteStudent(stu.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <Link to="/createstudent" className=" btn btn-primary navbtn">
            Add New Student
          </Link>
        </Table>
      </div>
    </div>
  );
};

export default ViewStudent;
