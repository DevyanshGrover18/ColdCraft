import express from "express";
import cors from "cors";
import './config/env.js'
import { generateEmail } from "./controllers/emailController.js";


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/generate", generateEmail);

// Start server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});