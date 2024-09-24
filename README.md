# React-Redux Chat Application

This is a simple real-time chat application built using **React.js**, **Redux**, and **Hooks**. The application allows multiple users to chat across different browser tabs without using **Socket.io** or any backend server. Messages are stored locally using **localStorage**, and real-time communication between tabs is achieved using the **BroadcastChannel API**.

## Features

1. **Username Prompt**: 
   - Users are prompted to enter a username before entering the chat.
   - Each new browser tab can have a unique username, ensuring that usernames do not persist across tabs.
   
2. **Real-time Chat Across Tabs**: 
   - Chat messages are shared between all opened browser tabs, simulating multiple users.
   - Messages are updated in real-time across all tabs using the **BroadcastChannel API**.

3. **Local Storage for Messages**: 
   - Messages are stored in the browser's `localStorage` to persist across page reloads.

4. **Send Messages**: 
   - Users can send text messages to the chat room.
   - Sent messages appear in the chat instantly, with the sender's username displayed.

5. **Message History and Infinite Scrolling**: 
   - The chat displays history of messages, loading 25 messages when scrolling to the top.

6. **Responsive Design**: 
   - The chat interface is responsive and adapts to various screen sizes using **Material-UI** components.

7. **Testing with Vitest**: 
   - Unit tests are written for components and functionality using **Vitest** and **React Testing Library**.

## Technologies Used

- **React.js**: For building the UI components.
- **Redux**: For managing application state.
- **Hooks**: For managing component state and side effects.
- **Material-UI**: For responsive and consistent layout and styling.
- **localStorage**: For storing messages persistently in the browser.
- **BroadcastChannel API**: For real-time message synchronization across browser tabs.
- **Vitest**: For unit testing the application.
- **Vite**: As the build tool for fast development.

## Getting Started

### Prerequisites

To run this project locally, ensure that you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Meshach88/chat-app.git
   cd chat-app
2. **Install dependencies:**
    npm install
3. **Run the application in development mode:**
    npm run dev
4. **Open http://localhost:5173 in your browser to view the app.**
