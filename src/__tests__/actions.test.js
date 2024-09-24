import { sendMessageAction, loadMoreMessagesAction } from '../redux/actions';
import { describe, it, expect } from 'vitest';

describe('Chat Actions', () => {
  it('should create an action to send a message', () => {
    const message = { sender: 'John', text: 'Hello!' };
    const expectedAction = {
      type: 'SEND_MESSAGE',
      payload: message,
    };

    expect(sendMessageAction(message)).toEqual(expectedAction);
  });

  it('should create an action to load messages', () => {
    const messages = [
      { sender: 'Alice', text: 'Hey!' },
      { sender: 'Bob', text: 'Hi there!' }
    ];
    const expectedAction = {
      type: 'LOAD_MORE_MESSAGES',
      payload: messages,
    };

    expect(loadMoreMessagesAction(messages)).toEqual(expectedAction);
  });
});
