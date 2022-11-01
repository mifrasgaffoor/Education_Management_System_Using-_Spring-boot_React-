import React, { useState, useEffect } from "react";
import ClsRoomService from "../../service/ClsRoomService";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "../../App.css";
const ViewClassRoom = () => {
  const [cls, setCls] = useState([]);

  useEffect(() => {
    ClsRoomService.getAllCls()
      .then((res) => {
        console.log(res.data);
        setCls(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(cls);

  const deleteCls = (clsid) => {
    ClsRoomService.deleteCls(clsid)
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
      <h3 className="text-center viewstudenthaead">ClassRoom Details</h3>
      <div className="row">
        <Table striped bordered hover size="sm" className="table_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ClassRoom</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          {cls.map((cls) => {
            return (
              <tr key={cls.id}>
                <td>{cls.id}</td>
                <td>{cls.nameOfclass}</td>
                <td>{cls.classDesc}</td>

                <td>
                  <Link to={`/editclass/${cls.id}`}>
                    <button type="button" class="btn btn-primary">
                      Edit Details
                    </button>
                  </Link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteCls(cls.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <Link to="/createclass" className=" btn btn-primary navbtn">
            Create New ClassRoom
          </Link>
        </Table>
      </div>
    </div>
  );
};

export default ViewClassRoom;
