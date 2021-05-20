import React from "react";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="container">
      <div className="p-3 text-center bg-info text-light">
        <h1>EMPLOYEE MANAGEMENT SYSTEM (useReducer)</h1>
      </div>
      <Employee />
    </div>
  );
}

export default App;
