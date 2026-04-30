const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const entry of ["index.html", "assets", "images"]) {
  fs.cpSync(path.join(root, entry), path.join(dist, entry), { recursive: true });
}
