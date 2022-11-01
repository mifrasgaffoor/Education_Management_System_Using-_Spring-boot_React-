/* eslint-disable no-undef */
import React, { useState } from "react";
import "../../App.css";
import TeacherService from "../../service/TeacherService";
import { useNavigate } from "react-router-dom";
const CreateTeacher = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [homeDown, setHomeDown] = useState("");
  let navigate = useNavigate();
  const saveTeacher = (e) => {
    e.preventDefault();
    const teacher = { name, subject, homeDown };
    TeacherService.addteacher(teacher)
      .then((res) => {
        console.log(res.data);
        alert("Teacher Details Created Successfully");
        navigate("/viewteacher");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container_teacher">
      <h2 className="text-center">Add the Details of Teachers </h2>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 ">
          <div className="Card ">
            <div class="row">
              <div class="col">
                <div class="form-outline ">
                  <label class="form-label" for="form12">
                    Name of the Teacher
                  </label>
                  <input
                    type="text"
                    id="form12"
                    class="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Class</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option>Physics</option>
                  <option>Biology</option>
                  <option>Maths</option>
                  <option>English</option>
                  <option>History</option>
                  <option>Chemistry</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">home_down_of_teacher</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  value={homeDown}
                  onChange={(e) => setHomeDown(e.target.value)}
                >
                  <option>Colombo</option>
                  <option>Jaffna</option>
                  <option>Kurunegala</option>
                  <option>Ampara</option>
                  <option>Anuradhapura</option>
                  <option>Kandy</option>
                  <option>Ratnapura</option>
                  <option>Trincomalee</option>
                  <option>Badulla</option>
                  <option>Galle</option>
                  <option>Trincomalee</option>
                  <option>Badulla</option>
                  <option>Puttalam</option>
                  <option>Vavuniya</option>
                  <option>Polonnaruwa</option>
                  <option>Mannar</option>
                  <option>Mullaitivu</option>
                </select>
              </div>
              <button
                type="button"
                className="btn btn-success teabtn"
                onClick={(e) => {
                  saveTeacher(e);
                }}
              >
                Add the Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateTeacher;
