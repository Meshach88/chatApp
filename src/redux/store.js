import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducer';

// Create the Redux store with middleware
const store = configureStore({
  reducer: {
    chat: chatReducer, // Add reducers here
  },
});

export default store;
