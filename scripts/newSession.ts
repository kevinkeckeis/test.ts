import fs from "node:fs/promises";
import { todaysSessionPath } from "./utils.js";

const sessionPath = todaysSessionPath();
const indexPath = `./index.ts`;

// Create a session folder, if it does not exist
await fs.access("./sessions")
  .catch(() => {
    fs.mkdir("./sessions");
  });

// Create a session for the current day, if it does not exist
await fs.access(sessionPath)
  .catch(async () => {
    await fs.writeFile(sessionPath, "", { encoding: "utf-8" });
  });

// Delete index.ts, if it exists
await fs.access(indexPath)
  .then(async () => await fs.rm(indexPath))
  .catch(() => {
    console.log(`Index doesn't exist.`);
  });

// Create an index to current session
await fs
  .symlink(sessionPath, "./index.ts")
  .catch((err) => console.log(err));
