// const http = require("http");
// const port = 3000;
// const app = require('./app')

// const server = http.createServer(app)
// server.listen(port,()=>{
//     console.log('app is running on port',port)
// });

import http from 'http';
import app from './app.js'; // Note the `.js` extension is needed in ESM
const port = process.env.PORT | 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('App is running on port', port);
});
