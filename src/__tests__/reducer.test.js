import chatReducer from '../redux/reducer';
import { describe, it, expect } from 'vitest';

describe('chatReducer', () => {
  const initialState = {
    messages: [],
  };

  it('should return the initial state', () => {
    expect(chatReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SEND_MESSAGE', () => {
    const newMessage = { sender: 'John', text: 'Hello!' };
    const action = { type: 'SEND_MESSAGE', payload: newMessage };
    const expectedState = { messages: [newMessage] };
    
    expect(chatReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_MORE_MESSAGES', () => {
    const storedMessages = [
      { sender: 'Alice', text: 'Hey!' },
      { sender: 'Bob', text: 'Hi there!' }
    ];
    const action = { type: 'LOAD_MORE_MESSAGES', payload: storedMessages };
    const expectedState = { messages: storedMessages };

    expect(chatReducer(initialState, action)).toEqual(expectedState);
  });
});
