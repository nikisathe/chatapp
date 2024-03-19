## Chatbot using Nodejs

### Project Requirements:

1.Node js installation from official site nodejs.org

2.VS Code installation from official site code.visualstudio.com

### How to use this code

#### You can download code 2 ways:

#### 1.Git commands

use
`git clone <repository_url>`

run
`npm init`
inside the root directory before running the code.

#### 2.Download zip file from the repository

1.extract it in your desired directory

2.run npm init inside the root directory before running the code.

## Backend Installation

Install dependencies a with npm

```
npm install express
```

```
npm install socket.io
```

## Frontend

The script tag `<script src="/socket.io/socket.io.js"></script>` is used to include the Socket.IO library, which enables real-time communication between the client and server.

The JavaScript code handles the following functionalities:

1.Connecting to the Socket.IO server using `const socket = io()`.
2.Accessing the send button and message input field using document.getElementById.
3.Displaying incoming messages in the "messages" <div> using the `` socket.on("message", ...)` function.
4.Sending user messages to the server using `socket.emit('user-message', message)` when the send button is clicked.
