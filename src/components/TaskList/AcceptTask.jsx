import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';

const AcceptTask = ({ task }) => { // Accept task as a prop
  return (
    <div>
      {/* Card 1  */}
      <Card sx={{ minWidth: "400px", height: "340px", p: 2, backgroundColor: '#cd3e94', borderRadius: "8%" }}>
        
        {/* Button and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, color: "white" }}>
          <Button color='error' variant='contained'>{task.category}</Button> {/* Change here */}
          <Typography>{task.date}</Typography> {/* Change here */}
        </Box>

        {/* Heading */}
        <Typography variant='h5' sx={{ mb: 2, textAlign: 'start', fontWeight: "bold", color: "white" }}>
          {task.taskTitle}
        </Typography>

        {/* Description */}
        <Typography sx={{ textAlign: 'start', color: "white" }}>
          {task.description}
        </Typography>
        
        <Typography textAlign={'center'} sx={{}}>
          <Button color='success' variant='contained' size='small' sx={{ mt: 5 }}> Mark Completed </Button>
          <Button color='error' variant='contained' size='small' sx={{ mt: 5, ml: 3 }} > Mark as Failed </Button>
        </Typography>

      </Card>
    </div>
  );
};

export default AcceptTask;
