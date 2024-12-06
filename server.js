import express from "express";
import { iaResponseText } from "./src/controllers/controllers.js";

const app = express();
// app.use(express.static("uploads"));

app.use(express.json());
app.get("/openai/chat", iaResponseText);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
