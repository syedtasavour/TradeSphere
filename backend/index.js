require("dotenv").config();

const express = require("express");
const { default: mongoose, Mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cors = require ("cors");

const { PositionsModel } = require("./models/PositionsModel");
const { HoldingsModel } = require("./models/HoldingsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  });

app.post('newOrder',async(req,res)=>{
  let newOrder = new OrdersModel({});
  newOrder.save();
  res.send("Order Saved");

});

app.listen(PORT, () => {
  console.log("app started");
  mongoose.connect(URI);
  console.log("db connected");
});
