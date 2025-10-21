const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (res) => res.send("Todo API is running..."));
app.use("/api/todos", todoRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 10000;
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

// Optional: increase timeouts for Render
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 125 * 1000;
