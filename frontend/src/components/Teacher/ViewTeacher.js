import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../../App.css";
import TeacherService from "../../service/TeacherService";
import { Link } from "react-router-dom";
const ViewTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  console.log(teacher);
  useEffect(() => {
    TeacherService.getAllteacher()
      .then((res) => {
        console.log(res.data);
        setTeacher(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteTeacher = (teaid) => {
    TeacherService.deleteTeacher(teaid)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="table_conainer">
      <Link to="/" className="btn btn-outline-primary">
        Back
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name of the Teacher</th>
            <th>Subject</th>
            <th>Home_down_of_teacher</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teacher.map((tea) => {
            return (
              <tr key={tea.id}>
                <td>{tea.id}</td>
                <td>{tea.name}</td>
                <td>{tea.subject}</td>
                <td>{tea.homeDown}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/editteacher/${tea.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteTeacher(tea.id);
                    }}
                  >
                    Dlete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <Link to="/createteacher" className=" btn btn-primary navbtn">
          Create New Teacher
        </Link>
      </Table>
    </div>
  );
};

export default ViewTeacher;
