import React from "react";
import Header from "../../others/Header";
import { Box } from "@mui/material";
import TaskList from "../../others/TaskList";
import ListNumber from "../../others/ListNumber";

const EmployeeDashboard = ({ employee,handleLogout }) => { // Change employees to employee
  // Check if employee is defined
  if (!employee) {
    return <h1>No employee data available</h1>; // Handle null case
  }

  return (
    <div>
      <Box sx={{ bgcolor: "#1C1C1C1C" }}>
        <Header employee={employee} handleLogout={handleLogout} />
        <ListNumber employee={employee}  />
        <Box sx={{ mt: -3 }}>
          <TaskList  />
        </Box>
      </Box>
    </div>
  );
};

export default EmployeeDashboard;
