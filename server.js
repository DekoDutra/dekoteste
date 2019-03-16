const express = require("express"),
  path = require("path"),
  serveStatic = require("serve-static"),
  app = express();

app.use(serveStatic(path.join(__dirname, "dist")));

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Server started at port ${port}`);
