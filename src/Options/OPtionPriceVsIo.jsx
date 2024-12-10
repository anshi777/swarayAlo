import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";
import NavBar from "../NavBar/NavBar";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const OptionPriceVsIO = () => {
  const [live, setLive] = useState(false); // State for Live toggle
  const [strike, setStrike] = useState(""); // Strike value
  const [data, setData] = useState(generateRandomData(strike)); // Initial random data
  const [symbol, setSymbol] = useState("BANKNIFTY");
  const [expiry, setExpiry] = useState("");
  const [historicalDate, setHistoricalDate] = useState("");

  // Function to generate random fluctuating data based on strike
  function generateRandomData(strikeValue) {
    const labels = ["9:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"];
    const priceData = labels.map((_, i) => {
      const base = parseInt(strikeValue);
      const fluctuation = Math.sin(i) * 200 + Math.random() * 20000; // Add up/down variations
      return base + fluctuation;
    });

    const callOIData = labels.map((_, i) => {
      const baseOI = 32000;
      const fluctuation = Math.cos(i) * 300 + Math.random() * 50000; // Add up/down variations
      return baseOI + fluctuation;
    });

    return {
      labels,
      datasets: [
        {
          label: "Price",
          data: priceData,
          borderColor: "#000",
          borderWidth: 2,
          borderDash: [2, 2], // Dotted line style for Price
          pointRadius: 3,
          pointBackgroundColor: "#000",
          tension: 2.4, // Smooth line with fluctuations
        },
        {
          label: "Call OI",
          data: callOIData,
          borderColor: "#00bcd4",
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "#00bcd4",
          tension: 1.4, // Smooth line with fluctuations
        },
      ],
    };
  }

  // Update data when Strike value changes
  useEffect(() => {
    setData(generateRandomData(strike));
  }, [strike]);

  useEffect(() => {
    if (live) {
      const interval = setInterval(() => {
        setData(generateRandomData(strike));
      }, 2000); 
      return () => clearInterval(interval); // Cleanup interval
    }
  }, [live, strike]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        ticks: { color: "#555" },
      },
      x: {
        ticks: { color: "#555" },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
          },
        },
        intersect: false, // Show tooltip for both datasets
        mode: "index", // Display data from both lines at the same time
      },
    },
  };

  return (
    <div class="flex">
    <div class="w-1/6 bg-blue-700 p-8 text-white">
      <NavBar />
    </div>
    <div className=" mx-auto bg-white rounded shadow-md bg-gray-100 shadow-lg min-h-screen w-5/6 p-4">
      <p className=" text-xl font-semibold">Options Strike Price vs OI</p>
      <div className="mb-6 flex flex-col sm:flex-row items-center shadow-lg gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Symbol</label>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="BANKNIFTY">BANKNIFTY</option>
            <option value="NIFTY">NIFTY</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Expiry</label>
          <input
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Strike</label>
          <input
            type="number"
            value={strike}
            onChange={(e) => setStrike(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Historical Date</label>
          <input
            type="date"
            value={historicalDate}
            onChange={(e) => setHistoricalDate(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium">Live</label>
          <input
            type="checkbox"
            checked={live}
            onChange={(e) => setLive(e.target.checked)}
            className="w-5 h-5"
          />
        </div>
      </div>
      {/* Chart */}
      <div className=" shadow-lg  ">
      <p className=" text-xl font-semibold"> CallPrice vs OI</p>

        <Line data={data} options={options} />
        
      </div>
      
      <div className=" shadow-lg ">
      <p className=" text-xl font-semibold">Put Price vs OI</p>

        <Line data={data} options={options} />
      </div>
    </div>
    </div>
  );
};

export default OptionPriceVsIO;
