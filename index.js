const express = require("express");
const path = require("path");
const app = express();

// Enable trust proxy to get correct IP if behind proxy
app.set("trust proxy", true);

app.use(express.static("public"));

// Serve static files from public directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
