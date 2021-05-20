import React from "react";
import { ACTIONS } from "./Employee";

const EmployeeList = ({ empList, dispatch }) => {
  return (
    <div className="pt-3">
      <table className="table table-bordered">
        <thead className="bg-info">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empList &&
            empList.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: ACTIONS.EDIT, payload: emp })
                      }
                      className="btn btn-sm btn-primary mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: ACTIONS.DELETE, payload: emp.id })
                      }
                      className="btn btn-sm btn-primary mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
