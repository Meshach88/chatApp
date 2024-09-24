import React from 'react';
import { ListItem, Typography, Box } from '@mui/material';

const Message = ({ sender, text, isOwnMessage }) => {
  return (
    <ListItem 
      sx={{
        display: 'flex',
        justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
        padding: '8px 0',
        width: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: isOwnMessage ? '#c7e1ff' : '#f1f1f1',
          color: isOwnMessage ? '#000' : '#000',
          borderRadius: '8px',
          padding: '8px 12px',
          maxWidth: '70%',
          wordBreak: 'break-word',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>
          {sender}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </Box>
    </ListItem>
  );
};

export default Message;
