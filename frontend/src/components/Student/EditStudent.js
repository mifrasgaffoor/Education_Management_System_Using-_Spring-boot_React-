import React, { useState, useEffect } from "react";
import StudentService from "../../service/StudentService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditStudent = () => {
  let { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [emailId, setEmail] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    StudentService.getStudentByid(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLasttName(res.data.lastName);
        setEmail(res.data.emailId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateStudent = (e) => {
    e.preventDefault();
    const student = { id, firstName, lastName, emailId };
    if (id) {
      StudentService.updateStudent(student)
        .then((res) => {
          console.log(res.data);
          navigate("/viewstudent");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container stu_edit_container">
      <h2 className="text-center">Update Students Details</h2>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 ">
          <div className="Card">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">FirstName</label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your FirstName"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">LastName</label>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your LastName"
                  className="form-control"
                  onChange={(e) => setLasttName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">LastName</label>
                <input
                  type="text"
                  value={emailId}
                  placeholder="Enter your Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  updateStudent(e);
                }}
              >
                Update Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
