import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../NavBar/NavBar";

// Function to generate random data
const generateRandomRow = () => {
  const symbols = ["NIFTY", "BANKNIFTY", "FINNIFTY"];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomLastPrice = Math.floor(17000 + Math.random() * 5000); // Random price between 17000 and 22000
  const randomPriceChange = Math.floor(-300 + Math.random() * 600); // Random price change between -300 and +300
  const randomOIChange = Math.floor(-600 + Math.random() * 400); // Random OI change between -200 and +200
  const longVsShort = randomPriceChange >= 0 ? "Long Buildup" : "Short Covering"||"Short Buildup"||"0 ";

  return {
    date: new Date().toISOString().split("T")[0], // Today's date
    symbol: randomSymbol,
    lastPrice: randomLastPrice,
    priceChange: randomPriceChange,
    oiChange: randomOIChange,
    longVsShort: longVsShort,
  };
};

const LongVsShort = () => {
  const [symbol, setSymbol] = useState("");
  const [expiryDate, setExpiryDate] = useState(null);
  const [interval, setInterval] = useState(5);
  const [livePrice, setLivePrice] = useState(false);
  const [historicalDate, setHistoricalDate] = useState(null);
  const [randomData, setRandomData] = useState([generateRandomRow()]);
  
  // Function to render price change with color
  const renderPriceChange = (value) => {
    return value >= 0 ? (
      <span className="text-green-500">+{value}</span>
    ) : (
      <span className="text-red-500">{value}</span>
    );
  };

  // Function to render OI change with color
  const renderOIChange = (value) => {
    return value >= 0 ? (
      <span className="text-green-500">+{value}</span>
    ) : (
      <span className="text-red-500">{value}</span>
    );
  };

  const addRandomRow = () => {
    setRandomData((prevData) => [...prevData, generateRandomRow()]);
  };

  // This effect will run when livePrice changes
  useEffect(() => {
    let intervalId;

    if (livePrice) {
      // Set an interval to update the data continuously when livePrice is checked
      intervalId = setInterval(() => {
        setRandomData((prevData) =>
          prevData.map((row) => ({
            ...row,
            lastPrice: row.lastPrice + Math.floor(Math.random() * 101) - 50, // Random increase or decrease
            priceChange: row.priceChange + Math.floor(Math.random() * 61) - 30, // Random price change
            oiChange: row.oiChange + Math.floor(Math.random() * 101) - 50, // Random OI change
          }))
        );
      }, 1000); // Update every 1 second (1000 ms)
    } else {
      // If livePrice is false, clear the interval
      clearInterval(intervalId);
    }

    // Clean up on unmount or when livePrice changes
    return () => {
      clearInterval(intervalId);
    };
  }, [livePrice]);

  return (
    <>
      <div className="flex">
        <div className="w-1/6 bg-blue-700 p-8 text-white">
          <NavBar />
        </div>

        <div className="w-5/6 p-4 bg-gray-700 text-black min-h-screen ">
          <h1 className="text-3xl font-semibold text-white mb-4">Futures Long Vs Short</h1>

          {/* Filters */}
          <div className="mb-4 flex gap-4 text-white">
            <div>
              <label className="mr-2">Symbol</label>
              <select
                className="border p-2"
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
              <label className="mr-2">Expiry Date</label>
              <DatePicker
                selected={expiryDate}
                onChange={(date) => setExpiryDate(date)}
                className="border p-2"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div>
              <label className="mr-2">Interval</label>
              <select
                className="border p-2"
                value={interval}
                onChange={(e) => setInterval(Number(e.target.value))}
              >
                <option value={5}>5 Min</option>
                <option value={15}>15 Min</option>
                <option value={30}>30 Min</option>
                <option value={60}>60 Min</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={livePrice}
                onChange={() => setLivePrice(!livePrice)}
                className="mr-2"
              />
              <label>Live Price</label>
            </div>

            <div>
              <label className="mr-2">Historical Date</label>
              <DatePicker
                selected={historicalDate}
                onChange={(date) => setHistoricalDate(date)}
                className="border p-2"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>

          {/* Button to Add Random Row */}
          <div className="mb-4">
            <button
              onClick={addRandomRow}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Random Row
            </button>
          </div>

          {/* Table */}
          <table className="w-full border-collapse table-auto text-white ">
            <thead>
              <tr className="bg-gray-200 text-black ">
                <th className="border p-2">Date</th>
                <th className="border p-2">Symbol</th>
                <th className="border p-2">Last Price</th>
                <th className="border p-2">Price Change</th>
                <th className="border p-2">OI Change</th>
                <th className="border p-2">Long vs Short</th>
              </tr>
            </thead>
            <tbody>
              {randomData.map((row, index) => (
                <tr key={index}>
                  <td className="border p-2">{row.date}</td>
                  <td className="border p-2">{row.symbol}</td>
                  <td className="border p-2">{row.lastPrice}</td>
                  <td className="border p-2">
                    {renderPriceChange(row.priceChange)}
                  </td>
                  <td className="border p-2">
                    {renderOIChange(row.oiChange)}
                  </td>
                  <td className="border p-2">{row.longVsShort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LongVsShort;
