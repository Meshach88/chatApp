import { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const UserNamePrompt = ({ onSubmitUsername }) => {
  const [username, setUsername] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // Check if username is already set in local storage

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      // setSubmitted(true)
      setUsername(storedUsername); // Set the existing username
      onSubmitUsername(storedUsername); //Pass it back to parent
    }
  },[onSubmitUsername])


  // Handle submission of username
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      sessionStorage.setItem('username', username);  // Store username in local storage
      // setSubmitted(true); //Mark it as submitted
      onSubmitUsername(username);  // Set username state in the parent component (App)
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
        '@media (max-width: 600px)' :{
          padding: 1, //Adjust padding for small screens
        }
      }}
    >
      <Typography variant="h5" gutterBottom>
        Enter Your Name
      </Typography>
      
      <TextField
        label="Name"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ marginBottom: 2, width: '100%', maxWidth: '400px' }}
      />
      
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ width: '100%', maxWidth: '400px' }}
      >
        Join Chat
      </Button>
    </Box>
  );
};

export default UserNamePrompt;
