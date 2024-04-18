import fs from "node:fs/promises";
import { todaysSessionPath, todaysSessionPathWithTime } from "./utils.js";

const sessionPath = todaysSessionPath();
const sessionPathWithTime = todaysSessionPathWithTime();

const todayExists = await fs.access(sessionPath)
  .then(() => true)
  .catch(() => false);

if(!todayExists) {
  console.log('There is nothing to save!')
  process.exit()
}

await fs.rename(sessionPath, sessionPathWithTime)