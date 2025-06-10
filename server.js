//web server using Node.js
import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
  } else {
    res.writeHead(404, { "content-Type": "text/plain" });
    res.end("bye");
  }
});

server.listen(3000);
