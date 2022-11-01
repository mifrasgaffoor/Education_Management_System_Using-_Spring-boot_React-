import React from "react";
import { Link } from "react-router-dom";
const ClassRoom = () => {
  return (
    <div className="home">
      <div className="education">
        <div className="classroom">
          <Link to="/createclass">
            <h3>Add-ClassRoom</h3>
          </Link>
          <Link to="/viewclass">
            <h3>View-ClassRoom</h3>
          </Link>
        </div>
        <Link className="btn btn-outline-primary" type="button" to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ClassRoom;
