import React, { useReducer } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import { v4 as uuidv4 } from "uuid";

export const ACTIONS = {
  ADD: "ADD_EMPLOYEE",
  DELETE: "DELETE_EMPLOYEE",
  EDIT: "EDIT_EMPLOYEE",
};

export const empinit = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      let empp = action.payload;
      if (empp.id === "") {
        empp = { ...empp, id: uuidv4() };
        return { ...state, empList: [empp, ...state.empList] };
      } else {
        const newlist = state.empList.map((emp) => {
          if (emp.id === empp.id) {
            return { ...empp };
          } else {
            return emp;
          }
        });
        return { emp: empinit, empList: newlist };
      }
    case ACTIONS.DELETE:
      return {
        ...state,
        empList: state.empList.filter((emp) => emp.id !== action.payload),
      };
    case ACTIONS.EDIT:
      return { ...state, emp: action.payload };
    default:
      return state;
  }
};

const Employee = () => {
  const [empObj, dispatch] = useReducer(reducer, {
    emp: empinit,
    empList: [],
  });
  return (
    <div className="row">
      <div className="col-4">
        <EmployeeForm employee={empObj.emp} dispatch={dispatch} />
      </div>
      <div className="col-8">
        <EmployeeList empList={empObj.empList} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Employee;
