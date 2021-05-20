import React, { useState, useEffect } from "react";
import { ACTIONS, empinit } from "./Employee";

const EmployeeForm = ({ employee, dispatch }) => {
  const [emp, setEmp] = useState(empinit);

  useEffect(() => {
    console.log(employee);
    if (employee.id !== "") setEmp(employee);
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: emp });
    setEmp(empinit);
  };

  return (
    <div className="pt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={emp.firstName}
            onChange={(e) => setEmp({ ...emp, firstName: e.target.value })}
            className="form-control"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={emp.lastName}
            onChange={(e) => setEmp({ ...emp, lastName: e.target.value })}
            className="form-control"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={emp.email}
            onChange={(e) => setEmp({ ...emp, email: e.target.value })}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={emp.phone}
            onChange={(e) => setEmp({ ...emp, phone: e.target.value })}
            className="form-control"
            placeholder="Enter Phone"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
