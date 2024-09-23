import { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const UserNamePrompt = ({ setUserName }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('username', name);  // Store username in local storage
      setUserName(name);  // Set username state in the parent component (App)
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
