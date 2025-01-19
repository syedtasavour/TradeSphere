require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./Routes/auth"); // Import auth routes
const { PositionsModel } = require("./models/PositionsModel");
const { HoldingsModel } = require("./models/HoldingsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:3000","http://localhost:3001"], // Frontend Origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Auth routes
app.use("/auth", authRoutes); // Use the auth route under /auth

// Existing Routes
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved");
});

// Start Server
app.listen(PORT, () => {
  console.log("app started");
  mongoose.connect(URI);
  console.log("db connected");
});
