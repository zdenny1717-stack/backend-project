import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));


app.get("/api/orders", (req, res) => {
  const sampleOrders = [
    { id: 1, name: "Fried Chicken", price: 120, quantity: 1, status: "Pending" },
    { id: 2, name: "Iced Tea", price: 50, quantity: 2, status: "Ready" },
  ];
  res.json(sampleOrders);
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
