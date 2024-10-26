import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Header = ({handleLogout,employee}) => {

const [data,setData]=useState("Admin");

useEffect(() => {
  // Set data based on employee prop
  if (!employee) {
    setData("Admin");
  } else {
    setData(employee.firstName);
  }
}, [employee]);

  return (
    // 🍀🍀 Adjusted padding, margins, and border-radius to be responsive.
    <Box sx={{ px: { xs: 2, sm: 3, md: 1}, py: { xs: 1, sm: 1.5, md: 1 }, m: { xs: 1, sm: 2, md: 1 }, borderRadius: 2}}>
      <Grid container spacing={2} alignItems="center">
        <Grid 
          // 🍀🍀 Adjusted the grid to take more space on smaller screens for better readability.
          item xs={10} sm={11} md={11}>
          <Typography 
            variant="h6" 
            // 🍀🍀 Adjusted font size for smaller screens to ensure responsive typography.
            component="div" 
            sx={{ fontWeight: 'bold', ml: { xs: 0.5, sm: 1 }, color: "white", fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
            Hi
            <br />
            <Typography 
              variant="h4" 
              sx={{ fontWeight: 'bold', color: "white", fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
              {data}👋 
            </Typography>
          </Typography>
        </Grid>
        
        <Grid 
          // 🍀🍀 Ensured the button takes proper space and doesn't shrink on smaller screens.
          item xs={2} sm={1} md={1}>
          <Button 
            // 🍀🍀 Changed button size slightly for better fit on small screens.
            variant="contained" 
            color="secondary" 
            onClick={handleLogout}
            sx={{ background: 'red', fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }, px: { xs: 1, sm: 2 } }}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
