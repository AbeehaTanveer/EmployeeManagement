import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div>
          <Card sx={{ minWidth: "400px", height: "340px", p: 2, backgroundColor: '#f9b234', borderRadius: "8%" }}>

{/* Button and Date */}
<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4,color:"white" }}>

  <Button color='error' variant='contained'> {task.category}</Button>
  <Typography> {task.taskDate} </Typography>
</Box>

{/* Heading */}
<Typography variant='h5' sx={{ mb: 2, textAlign: 'start' ,fontWeight:"bold",color:"white" }}>{task.taskTitle}</Typography>

{/* Description */}
<Typography sx={{ textAlign: 'start' ,color:"white" }}>
  {task.taskDescription}
</Typography>
<Button fullWidth color='secondary' variant='contained' size='small' sx={{mt:5}}> Completed Task </Button>

</Card>

    </div>
  )
}

export default CompleteTask
