import app from "./app.js";

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(
    `
🚀 LET’S GO!

🌐 Server running at: http://${HOST}:${PORT}`,
  );
});
