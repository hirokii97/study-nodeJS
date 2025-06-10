//web server using Node.js
import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
  } else if (req.url === "/api/user") {
    const user = { id: 1, name: "Hiroki" };
    res.writeHead(200, { "Content-type": "text/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("bye");
  }
});

server.listen(3000);
