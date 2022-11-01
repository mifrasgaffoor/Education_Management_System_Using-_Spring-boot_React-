import React, { useState } from "react";
import StudentService from "../../service/StudentService";
import { useNavigate } from "react-router-dom";
const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [emailId, setEmail] = useState("");
  let navigate = useNavigate();
  const saveStudent = (e) => {
    e.preventDefault();
    const student = { firstName, lastName, emailId };
    StudentService.addStudent(student)
      .then((res) => {
        console.log(res.data);
        alert("student details added successfully");
        navigate("/viewstudent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container_student">
      <h2 className="text-center">Pleae Fill this form only For Students</h2>
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
                ></input>
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
                <label className="form-label">E-Mail</label>
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
                className="btn btn-success stubtn"
                onClick={(e) => saveStudent(e)}
              >
                Add Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
