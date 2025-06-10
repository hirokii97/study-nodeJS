//web server using Node.js
import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
