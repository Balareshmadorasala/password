import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PasswordUpdate.css";

const PasswordUpdate = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      {/* Password Button (Always in Top-Right Corner) */}
      <button className="password-btn" onClick={() => setShowForm(!showForm)}>
        Password
      </button>

      {/* Password Form (Appears on Click) */}
      {showForm && (
        <div className="password-form">
          <h2>Change Password</h2>
          <form>
            <div className="form-group">
              <label>Old Password:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>New Password:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">
              Update Password
            </button>
           
          </form>
        </div>
      )}
    </div>
  );
};

export default PasswordUpdate;

