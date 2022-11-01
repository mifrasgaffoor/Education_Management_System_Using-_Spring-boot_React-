import React, { useState } from "react";
import "../../App.css";
import ClsRoomService from "../../service/ClsRoomService";
import { useNavigate } from "react-router-dom";
const CreateClassRoom = () => {
  const [nameOfclass, setnameOfclass] = useState("");
  const [classDesc, setclassDesc] = useState("");
  let navigate = useNavigate();
  const saveCls = (e) => {
    e.preventDefault();
    const cls = { nameOfclass, classDesc };
    ClsRoomService.addCls(cls)
      .then((res) => {
        console.log(res.data);
        alert("ClassRoom Details Created Successfully");
        navigate("/viewclass");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container_teacher">
      <h2 className="text-center">Add the Details of ClassRoom </h2>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 ">
          <div className="Card ">
            <div class="row"></div>
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Class</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  value={nameOfclass}
                  onChange={(e) => {
                    setnameOfclass(e.target.value);
                  }}
                >
                  <option>Grade-01</option>
                  <option>Grade-02</option>
                  <option>Grade-03</option>
                  <option>Grade-04</option>
                  <option>Grade-05</option>
                  <option>Grade-06</option>
                  <option>Grade-07</option>
                  <option>Grade-08</option>
                  <option>Grade-09</option>
                  <option>Grade-10</option>
                  <option>Grade-11</option>
                  <option>Grade-GCE(AL)</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Description of Class</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                  value={classDesc}
                  onChange={(e) => {
                    setclassDesc(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-success teabtn"
                onClick={saveCls}
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

export default CreateClassRoom;
