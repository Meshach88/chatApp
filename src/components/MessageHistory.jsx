import React, { useEffect, useRef, useState } from 'react';
import { List, ListItem, Typography, CircularProgress, Box, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreMessagesAction } from '../store/actions';
import Message from './Message';

const MessageHistory = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [loadingMore, setLoadingMore] = useState(false);
  const messageListRef = useRef(null);
  const currentUser = localStorage.getItem('username');

  // Handle scrolling to load more messages
  const handleScroll = (e) => {
    if (e.target.scrollTop === 0 && !loadingMore) {
      setLoadingMore(true);
      dispatch(loadMoreMessagesAction());
      setTimeout(() => {
        setLoadingMore(false);
      }, 1000); // Simulate a short delay for loading
    }
  };

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

   // Ensure `messages` is an array before calling map
   if (!messages || !Array.isArray(messages)) {
    return <div>No messages available</div>;
  }

  return (
    <Paper
      ref={messageListRef}
      onScroll={handleScroll}
      sx={{
        flex: 1,
        overflowY: 'auto',
        padding: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        position: 'relative',
        height: '60vh',
        maxHeight: '60vh',
        '@media (max-width: 600px)': {
          height: '50vh',
          maxHeight: '50vh',
        },
      }}
    >
      {/* Loading Indicator */}
      {loadingMore && (
        <Box sx={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)' }}>
          <CircularProgress size={24} />
        </Box>
      )}

      {/* Message List */}
      <List>
        {messages.map((msg, index) => (
          <Message
          key={index}
          sender={msg.sender}
          text={msg.text}
          isOwnMessage={msg.sender === currentUser}
        />
        ))}
      </List>
    </Paper>
  );
};

export default MessageHistory;
