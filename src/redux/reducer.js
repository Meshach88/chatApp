const initialState = {
    messages: [], // Array to hold chat messages
    // loading: false, // Loading state for fetching messages
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload], // Append new message to the messages array
        };
  
      case 'LOAD_MORE_MESSAGES':
        return {
          ...state,
          messages: [...action.payload, ...state.messages], // Prepend loaded messages to the existing messages array
        }; 
  
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload, // Set loading state based on action payload
        };
  
      default:
        return state; // Return the current state if action type is not recognized
    }
  };
  
  export default chatReducer;
  