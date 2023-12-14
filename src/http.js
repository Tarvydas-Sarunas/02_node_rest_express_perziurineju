const http = require("http"); //Inportuojame i musu koda http moduli

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body ===", body);
      });
  })
  .listen(8080); // Activates this server, listening on port 8080.
