const fs = require("fs");
const path = require("path");

// Step 1: Get directory path from command line argument
const dirPath = process.argv[2];

if (!dirPath) {
  console.error("Please provide a directory path as an argument.");
  process.exit(1);
}

// Step 2: Read directory
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    return;
  }

  console.log(`Contents of: ${dirPath}\n`);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    fs.stat(fullPath, (err, stats) => {
      if (err) {
        console.error(`Error accessing ${file}:`, err.message);
        return;
      }

      if (stats.isDirectory()) {
        console.log(`${file} (directory)`);
      } else if (stats.isFile()) {
        console.log(`${file} (file)`);

        if (file.endsWith(".txt")) {
          fs.readFile(fullPath, "utf-8", (err, data) => {
            if (err) {
              console.error(`Could not read ${file}:`, err.message);
              return;
            }

            const lineCount = data.split("\n").length;
            console.log(`${file} has ${lineCount} line(s)\n`);
          });
        }
      }
    });
  });
});
