import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

const CreateTask = ({employees}) => {

  
  return (
    <div>
      {/* Outer Box with vertical scrolling enabled */}
      <Box
        sx={{
          height: "150px",
          // overflowY: "auto",
          mb: 10,
          borderRadius: 2,
          border: "1px solid #00C389",
        }}
      >
        {/* Header Row */}
        <Grid container sx={{ bgcolor: "red", p: 1,borderRadius:2 }}>
          <Grid item xs={3}>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Employee Name
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              New Task
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              Active Task
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              Completed
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              Failed
            </Typography>
          </Grid>
        </Grid>
{/* Mapped EMployee */}
        {/* Row 1 */}
        {employees.map((emp, idx) => (
        <Grid
        key={idx}
          container
          sx={{
            bgcolor: "#1C1C1C",
            p: 1,
            mt: 1,
            borderRadius: 1,
            border: "1px solid #00C389",
          }}
        >
         
     
              <Grid item xs={3}>
                <Typography sx={{ color: "white" }}>{emp.firstName}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography sx={{ color: "#1e88e5", textAlign: "center" }}>
                  {emp.taskCounts.new}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography sx={{ color: "#fbc02d", textAlign: "center" }}>
                  {emp.taskCounts.active}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  {emp.taskCounts.completed}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography sx={{ color: "red", textAlign: "center" }}>
                  {emp.taskCounts.failed}
                </Typography>
              </Grid>
            
            
            </Grid>
        ))}
     
    

        {/* Add more rows here as needed, following the same structure */}
      </Box>
      
    </div>
  );
};

export default CreateTask;
