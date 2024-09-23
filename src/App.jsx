import { useState } from 'react';
import { Container, Box, Paper } from '@mui/material';
import ChatBox from './components/ChatBox';
import UserNamePrompt from './components/UserNamePrompt';
import MessageHistory from './components/MessageHistory';

const App = () => {
  const [userName, setUserName] = useState(localStorage.getItem('username'));

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {userName ? (
          <Box>
            <MessageHistory/>
            <ChatBox />
          </Box>
        ) : (
          <UserNamePrompt setUserName={setUserName} />
        )}
      </Paper>
    </Container>
  );
};

export default App;
