import { useState } from 'react';
import { Container, Box, Paper } from '@mui/material';
import ChatBox from './components/ChatBox';
import UserNamePrompt from './components/UserNamePrompt';

const App = () => {
  const [username, setUsername] = useState('');
  const handleUsernameSubmit = (submittedUsername) => {
    setUsername(submittedUsername); //Set the username in state once submitted
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {username ? (
          <Box>
            <ChatBox username = {username} />
          </Box>
        ) : (
          <UserNamePrompt onSubmitUsername={handleUsernameSubmit} />
        )}
      </Paper>
    </Container>
  );
};

export default App;
