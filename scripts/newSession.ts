import fs from "node:fs/promises";

const today = new Date();

const dateFormatted = (date: Date) => {
  const year = date.getFullYear().toString().slice(2, 4);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const todayFormatted = dateFormatted(today);
const sessionPath = `./sessions/${todayFormatted}.ts`;
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