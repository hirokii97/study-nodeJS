//web server using Node.js
import { createServer } from "http";
import { URL } from "url";

// const server = createServer((req, res) => {
//   if (req.url === "/hello") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("hello world");
//   } else if (req.url === "/api/user") {
//     const user = { id: 1, name: "Hiroki" };
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(user));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("bye");
//   }
// });

const server = createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  console.log(parsedUrl);

  switch (parsedUrl.pathname) {
    case "/":
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end("<p>トップページ</p>");
      break;
    case "/about":
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end("<p>***について</p>");
      break;
    default:
      res.writeHead(404);
      res.end("Not Founded");
  }
});

server.listen(3000);
