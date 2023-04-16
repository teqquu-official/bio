const socket = new WebSocket('ws://localhost:3000');
socket.addEventListener('open', (event) => {
  console.log('Connected to server');
});
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const message = messageInput.value;
  socket.send(message);
  
  messageInput.value = '';
});
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
