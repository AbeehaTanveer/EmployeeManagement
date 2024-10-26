import React, { useState } from 'react';
import { Box, TextField, Button, Checkbox, Typography, FormControlLabel, InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './Login.css'; 
const Login = ({handleLogin}) => {


  const [password,setPassword]=useState("")
const [email,setEmail]=useState("")


// console.log(handleLogin)
const handleSubmit=(e)=>{
  e.preventDefault()
  handleLogin(email,password)
  setEmail("")
  setPassword("")
}


  return (
    <div className="mainContainer">

    <Box 
      className="loginContainer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backdropFilter: 'blur(11px)', // Adding blur effect for the background
        background: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
      }}
      >
      <Box 
        sx={{
          width: 450,
          padding: '50px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent box effect
          textAlign: 'center',
          alignItems:"center",
        }}
        >
        {/* Camera Icon */}
        <CameraAltIcon sx={{ fontSize: 60, color: '#fff', marginBottom: '20px' }} />

<form >

        {/* Username Field */}
        <TextField
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        variant="filled"
        placeholder="Username"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <AccountCircle sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
            style: { color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.6)' },
          }}
          sx={{ marginBottom: '20px' }}
          />

        {/* Password Field */}
        <TextField
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        variant="filled"
        type="password"
        placeholder="Password"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <LockIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
            style: { color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.6)' },
          }}
          sx={{ marginBottom: '20px' }}
          />

        {/* Login Button */}
        <Button
        onClick={handleSubmit}
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#333',
          color: '#fff',
          fontSize: '16px',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#444',
          },
        }}
        >
          LOGIN
        </Button>
          </form>

        {/* Remember me and Forgot Password */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            color: '#fff',
          }}
          >
          <FormControlLabel
            control={<Checkbox sx={{ color: '#fff' }} />}
            label={<Typography sx={{ color: '#fff' }}>Remember me</Typography>}
            />
          <Typography sx={{ cursor: 'pointer', fontSize: '14px' }}>Forgot Password?</Typography>
        </Box>
      </Box>
    </Box>
            </div>
  );
};

export default Login;
