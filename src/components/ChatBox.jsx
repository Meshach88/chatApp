import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { sendMessageAction } from '../store/actions';
import MessageHistory from './MessageHistory';

const ChatBox = ({username}) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const broadcast = new BroadcastChannel('chat_channel');
 
  useEffect(() => {
    // Receive messages from other tabs
    broadcast.onmessage = (event) => {
      if (event.data.sender !== username){
        dispatch(sendMessageAction(event.data));
      }
    };
  }, [dispatch]);

  const sendMessage = () => {
    const newMessage = { sender: username, text: message };
    dispatch(sendMessageAction(newMessage));
    broadcast.postMessage(newMessage);
    setMessage(''); //Clear input after sending
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
      <MessageHistory/>
      {/* Input Field */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          sx={{ flexGrow: 1 }}
        />
        <Button
          variant="contained"
          onClick={sendMessage}
          sx={{ marginLeft: 2, minWidth: '100px' }}
          disabled={!message.trim()}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
