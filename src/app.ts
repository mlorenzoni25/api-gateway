import express from "express";

const app = express();

// app middleware
app
  // general conf
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  // security conf
  .disable("x-powered-by");

// handler for app closing
process.on("SIGINT", async () => {
  // exit from the process
  process.exit(0);
});

export default app;
