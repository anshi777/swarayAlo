import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../NavBar/NavBar";

const FuturesLongVsShort = () => {
  const [symbol, setSymbol] = useState("");
  const [expiryDate, setExpiryDate] = useState(null);
  const [interval, setInterval] = useState(5);
  const [livePrice, setLivePrice] = useState(false);
  const [historicalDate, setHistoricalDate] = useState(null);

  const data = [
    {
      date: "2024-12-04",
      symbol: "NIFTY",
      lastPrice: 17500,
      priceChange: 100,
      oiChange: -200,
      longVsShort: "Long",
    },
    {
      date: "2024-12-04",
      symbol: "BANKNIFTY",
      lastPrice: 41000,
      priceChange: -50,
      oiChange: 150,
      longVsShort: "Short",
    },
    {
      date: "2024-12-04",
      symbol: "FINNIFTY",
      lastPrice: 18400,
      priceChange: 200,
      oiChange: 100,
      longVsShort: "Long",
    },
    {
      date: "2024-12-03",
      symbol: "NIFTY",
      lastPrice: 17450,
      priceChange: -50,
      oiChange: 100,
      longVsShort: "Short",
    },
    {
      date: "2024-12-03",
      symbol: "BANKNIFTY",
      lastPrice: 40800,
      priceChange: 30,
      oiChange: -100,
      longVsShort: "Long",
    },
    {
      date: "2024-12-02",
      symbol: "FINNIFTY",
      lastPrice: 18300,
      priceChange: -100,
      oiChange: 200,
      longVsShort: "Short",
    },
    {
      date: "2024-12-02",
      symbol: "NIFTY",
      lastPrice: 17350,
      priceChange: 150,
      oiChange: -50,
      longVsShort: "Long",
    },
    {
      date: "2024-12-01",
      symbol: "BANKNIFTY",
      lastPrice: 40700,
      priceChange: -30,
      oiChange: 50,
      longVsShort: "Short",
    },
    {
      date: "2024-12-01",
      symbol: "FINNIFTY",
      lastPrice: 18250,
      priceChange: 80,
      oiChange: -10,
      longVsShort: "Long",
    },
    {
      date: "2024-11-30",
      symbol: "NIFTY",
      lastPrice: 17200,
      priceChange: -100,
      oiChange: 75,
      longVsShort: "Short",
    },
    {
      date: "2024-11-30",
      symbol: "BANKNIFTY",
      lastPrice: 40650,
      priceChange: 60,
      oiChange: 100,
      longVsShort: "Long",
    },
    {
      date: "2024-11-29",
      symbol: "FINNIFTY",
      lastPrice: 18200,
      priceChange: 20,
      oiChange: -150,
      longVsShort: "Short",
    },
    {
      date: "2024-11-29",
      symbol: "NIFTY",
      lastPrice: 17180,
      priceChange: 250,
      oiChange: 300,
      longVsShort: "Long",
    },
    {
      date: "2024-11-28",
      symbol: "BANKNIFTY",
      lastPrice: 40500,
      priceChange: 10,
      oiChange: -50,
      longVsShort: "Short",
    },
    {
      date: "2024-11-28",
      symbol: "FINNIFTY",
      lastPrice: 18150,
      priceChange: -50,
      oiChange: 50,
      longVsShort: "Long",
    },
    {
      date: "2024-11-27",
      symbol: "NIFTY",
      lastPrice: 17100,
      priceChange: -120,
      oiChange: 200,
      longVsShort: "Short",
    },
    {
      date: "2024-11-27",
      symbol: "BANKNIFTY",
      lastPrice: 40300,
      priceChange: 100,
      oiChange: -80,
      longVsShort: "Long",
    },
  ];
  

  const filteredData = data.filter((item) => {
    return (
      (symbol ? item.symbol === symbol : true) &&
      (expiryDate ? new Date(item.date).getTime() === expiryDate.getTime() : true)
    );
  });

  const renderPriceChange = (value) => {
    return value >= 0 ? (
      <span class="text-green-500">+{value}</span>
    ) : (
      <span class="text-red-500">{value}</span>
    );
  };

  const renderOIChange = (value) => {
    return value >= 0 ? (
      <span class="text-green-500">+{value}</span>
    ) : (
      <span class="text-red-500">{value}</span>
    );
  };

  return (

    <><div class=" flex">
        <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar/>
        </div>
       
        <div class="w-5/6 p-4 bg-gray-700 text-black min-h-screen">
          <h1 class="text-3xl font-semibold mb-4">Futures Long Vs Short</h1>

          {/* Filters */}
          <div class="mb-4 flex gap-4">
              <div>
                  <label class="mr-2">Symbol</label>
                  <select
                      class="border p-2"
                      value={symbol}
                      onChange={(e) => setSymbol(e.target.value)}
                  >
                      <option value="">Select Symbol</option>
                      <option value="NIFTY">NIFTY</option>
                      <option value="BANKNIFTY">BANKNIFTY</option>
                      <option value="FINNIFTY">FINNIFTY</option>
                      {/* Add more symbols as needed */}
                  </select>
              </div>

              <div>
                  <label class="mr-2">Expiry Date</label>
                  <DatePicker
                      selected={expiryDate}
                      onChange={(date) => setExpiryDate(date)}
                      class="border p-2"
                      dateFormat="yyyy-MM-dd" />
              </div>

              <div>
                  <label class="mr-2">Interval</label>
                  <select
                      class="border p-2"
                      value={interval}
                      onChange={(e) => setInterval(Number(e.target.value))}
                  >
                      <option value={5}>5 Min</option>
                      <option value={15}>15 Min</option>
                      <option value={30}>30 Min</option>
                      <option value={60}>60 Min</option>
                  </select>
              </div>

              <div class="flex items-center">
                  <input
                      type="checkbox"
                      checked={livePrice}
                      onChange={() => setLivePrice(!livePrice)}
                      class="mr-2" />
                  <label>Live Price</label>
              </div>

              <div>
                  <label class="mr-2">Historical Date</label>
                  <DatePicker
                      selected={historicalDate}
                      onChange={(date) => setHistoricalDate(date)}
                      class="border p-2"
                      dateFormat="yyyy-MM-dd" />
              </div>
          </div>

          {/* Table */}
          <table class="w-full border-collapse table-auto">
              <thead>
                  <tr class="bg-gray-200">
                      <th class="border p-2">Date</th>
                      <th class="border p-2">Symbol</th>
                      <th class="border p-2">Last Price</th>
                      <th class="border p-2">Price Change</th>
                      <th class="border p-2">OI Change</th>
                      <th class="border p-2">Long vs Short</th>
                  </tr>
              </thead>
              <tbody>
                  {filteredData.map((row, index) => (
                      <tr key={index}>
                          <td class="border p-2">{row.date}</td>
                          <td class="border p-2">{row.symbol}</td>
                          <td class="border p-2">{row.lastPrice}</td>
                          <td class="border p-2">{renderPriceChange(row.priceChange)}</td>
                          <td class="border p-2">{renderOIChange(row.oiChange)}</td>
                          <td class="border p-2">{row.longVsShort}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
      </div>
      </>
  );
};

export default FuturesLongVsShort;
