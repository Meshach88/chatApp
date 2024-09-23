import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Box, Paper, List, ListItem, Typography } from '@mui/material';
import { sendMessageAction, loadMoreMessagesAction } from '../store/actions';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [loadingMore, setLoadingMore] = useState(false);
  const broadcast = new BroadcastChannel('chat_channel');
  const messageListRef = useRef(null);

  // Load more messages when scrolling to the top
  const handleScroll = (e) => {
    if (e.target.scrollTop === 0 && !loadingMore) {
      setLoadingMore(true);
      dispatch(loadMoreMessagesAction());
      setLoadingMore(false);  //Can add logic to fetch more messages to implement pagination
    }
  };

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Receive messages from other tabs
    broadcast.onmessage = (event) => {
      dispatch(sendMessageAction(event.data));
    };
  }, [dispatch]);

  const sendMessage = () => {
    const newMessage = { sender: localStorage.getItem('username'), text: message };
    dispatch(sendMessageAction(newMessage));
    broadcast.postMessage(newMessage);
    setMessage(''); //Clear input after sending
  };

   

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
      {/* Input Field */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
