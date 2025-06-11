const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/price", async (req, res) => {
  try {
    const response = await fetch("https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT");
    const data = await response.json();
    const price = data.result[0].last_price;
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch price" });
  }
});

app.listen(3000, () => {
  console.log("Proxy running on port 3000");
});