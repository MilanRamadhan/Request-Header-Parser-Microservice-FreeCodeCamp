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
  const ip = req.ip?.replace(/^::ffff:/, ""); // menghapus ::ffff: jika ada
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: language,
    software: software,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
