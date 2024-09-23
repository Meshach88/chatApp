// Action to add a new message
export const addMessageAction = (message) => {
    return {
      type: 'ADD_MESSAGE',
      payload: message,
    };
  };
  
  // Action to load more messages
  export const loadMoreMessagesAction = (moreMessages) => {
    return {
      type: 'LOAD_MORE_MESSAGES',
      payload: moreMessages,
    };
  };
  
  // Action to set loading state
  export const setLoadingAction = (isLoading) => {
    return {
      type: 'SET_LOADING',
      payload: isLoading,
    };
  };
  