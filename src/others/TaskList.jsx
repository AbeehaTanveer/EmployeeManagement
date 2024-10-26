import { Box, Button, Card, Typography } from "@mui/material";
import React, { useContext } from "react";
import AcceptTask from "../components/TaskList/AcceptTask";
import NewTask from "../components/TaskList/NewTask";
import CompleteTask from "../components/TaskList/CompleteTask";
import FailedTask from "../components/TaskList/FailedTask";
import { AuthContext } from "../context/Authprovider";

const TaskList = () => {
  const { employees } = useContext(AuthContext);

  return (
    <Box
      sx={{
        color: "white",
        padding: 2,
        display: "flex",
        gap: 2,
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none", // Hides scrollbar in Chrome, Safari, etc.
        },
      }}
    >
      {employees.map((employee) =>
        employee.tasks.map((task, idx) => {
          if (task.activeTask) {
            return <AcceptTask key={idx} task={task} />;
          } else if (task.newTask) {
            return <NewTask key={idx} task={task} />;
          } else if (task.completedTask) {
            return <CompleteTask key={idx} task={task} />;
          } else if (task.failedTask) {
            return <FailedTask key={idx} task={task} />;
          } else {
            console.log("No Task");
            return null;
          }
        })
      )}
    </Box>
  );
};


export default TaskList;
