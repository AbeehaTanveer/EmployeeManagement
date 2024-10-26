import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  InputLabel,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import { AuthContext } from "../../context/Authprovider";


const AdminDashboard = ({handleLogout,employee}) => {
  
  const {handleCreate,employees,taskTitle,date,assignTo,taskDescription,category,settaskTitle,setAssignTo,setDate,setCategory,settaskDescription}=useContext(AuthContext)

  return (
    <>
      <Header handleLogout={handleLogout} employee={employee} />
      <Box
        className="adminContainer"
        sx={{
          mt: { xs: 4, md: -13 }, // Adjust top margin based on screen size
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#1C1C1C",
          padding: { xs: "10px", md: "0" }, // Add padding on smaller screens
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%" }, // Responsive width
            padding: { xs: "20px", md: "30px" }, // Responsive padding
            backgroundColor: "#121212",
            borderRadius: "8px",
            border: "1px solid #1e88e5",
          }}
        >
          {/* Panel Header with Icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <AddCircleOutlineIcon
              sx={{
                color: "#fff",
                marginRight: "10px",
                fontSize: { xs: "20px", md: "28px" },
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontSize: { xs: "16px", md: "20px" } }}
            >
              Create Task
            </Typography>
          </Box>

          {/* Grid Layout for Form */}
          <Grid container spacing={2}>
            {/* Left Side: Form Fields */}
            <Grid item xs={12} md={6}>
              <InputLabel
                sx={{ color: "#fff", fontSize: "14px", marginBottom: "5px" }}
              >
                Task Title
              </InputLabel>
              <TextField
                value={taskTitle}
                onChange={(e) => settaskTitle(e.target.value)}
                variant="outlined"
                placeholder="Make a UI design"
                fullWidth
                InputProps={{
                  style: { color: "#fff", backgroundColor: "#1c1c1c" },
                }}
                sx={{ marginBottom: "15px" }}
              />

              <InputLabel
                sx={{ color: "#fff", fontSize: "14px", marginBottom: "5px" }}
              >
                Date
              </InputLabel>
              <TextField
                value={date}
                onChange={(e) => setDate(e.target.value)}
                variant="outlined"
                type="date"
                fullWidth
                InputProps={{
                  style: { color: "#fff", backgroundColor: "#1c1c1c" },
                }}
                sx={{ marginBottom: "15px" }}
              />

              <InputLabel
                sx={{ color: "#fff", fontSize: "14px", marginBottom: "5px" }}
              >
                Assign To
              </InputLabel>
              <TextField
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                variant="outlined"
                placeholder="employee name"
                fullWidth
                InputProps={{
                  style: { color: "#fff", backgroundColor: "#1c1c1c" },
                }}
                sx={{ marginBottom: "15px" }}
              />

              <InputLabel
                sx={{ color: "#fff", fontSize: "14px", marginBottom: "5px" }}
              >
                Category
              </InputLabel>
              <TextField
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="outlined"
                placeholder="design, dev, etc."
                fullWidth
                InputProps={{
                  style: { color: "#fff", backgroundColor: "#1c1c1c" },
                }}
              />
            </Grid>

            {/* Right Side: taskDescription */}
            <Grid item xs={12} md={6}>
              <InputLabel
                sx={{ color: "#fff", fontSize: "14px", marginBottom: "5px" }}
              >
                Description
              </InputLabel>
              <TextField
                value={taskDescription}
                onChange={(e) => settaskDescription(e.target.value)}
                variant="outlined"
                placeholder="Detailed description of task"
                multiline
                rows={8}
                fullWidth
                InputProps={{
                  style: { color: "#fff", backgroundColor: "#1c1c1c" },
                }}
                sx={{ marginBottom: "15px" }}
              />

              {/* Create Task Button */}
              <Box sx={{ textAlign: "right" }}>
                <Button
                  onClick={handleCreate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00C389",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                    "&:hover": {
                      backgroundColor: "#00b37a",
                    },
                  }}
                >
                  Create Task
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Below Task Form Component */}
      <Box sx={{ mt: { xs: 4, md: -12 }, p: { xs: 2, md: 3 } }}>
        <CreateTask employees={employees} />
      </Box>
    </>
  );
};

export default AdminDashboard;
