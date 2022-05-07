import { app } from './app';
import http from 'http';
const server = http.createServer(app)
import { PORT } from './utils/config'



server.listen(PORT, () => {
  console.log("server running", PORT);
});

