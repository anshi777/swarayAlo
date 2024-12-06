import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import NavBar from "../NavBar/NavBar";

const Straddle = () => {
  const [filter, setFilter] = useState("NIFTY");
  const [expiryDate, setExpiryDate] = useState("");
  const [historicalDate, setHistoricalDate] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [strike1, setStrike1] = useState("");
  const [chartData, setChartData] = useState([]);

  const sampleData = {
    NIFTY: [
      { time: "10:00", price: 100, strike1Premium: 5 },
      { time: "10:30", price: 120, strike1Premium: 5 },
      { time: "11:00", price: 130, strike1Premium: 5 },
      { time: "11:30", price: 140, strike1Premium: 7 },
      { time: "12:00", price: 150, strike1Premium: 7 },
      { time: "12:30", price: 160, strike1Premium: 7 },
      { time: "13:00", price: 170, strike1Premium: 5 },
      { time: "13:30", price: 180, strike1Premium: 7 },
    ],
    BANKNIFTY: [
      { time: "10:00", price: 200, strike1Premium: 5 },
      { time: "10:30", price: 220, strike1Premium: 7 },
      { time: "11:00", price: 230, strike1Premium: 7 },
      { time: "11:30", price: 240, strike1Premium: 20 },
      { time: "12:00", price: 250, strike1Premium: 20 },
      { time: "12:30", price: 260, strike1Premium: 20 },
      { time: "13:00", price: 270, strike1Premium: 20 },
      { time: "13:30", price: 280, strike1Premium: 20 },
    ],
    ABC: [
      { time: "10:00", price: 150, strike1Premium: 5 },
      { time: "10:30", price: 160, strike1Premium: 12 },
      { time: "11:00", price: 170, strike1Premium: 13 },
      { time: "11:30", price: 180, strike1Premium: 15 },
      { time: "12:00", price: 190, strike1Premium: 17 },
      { time: "12:30", price: 200, strike1Premium: 18 },
      { time: "13:00", price: 210, strike1Premium: 20 },
      { time: "13:30", price: 220, strike1Premium: 22 },
    ],
    XYZ: [
      { time: "10:00", price: 300, strike1Premium: 5 },
      { time: "10:30", price: 320, strike1Premium: 20 },
      { time: "11:00", price: 330, strike1Premium: 7 },
      { time: "11:30", price: 340, strike1Premium: 5 },
      { time: "12:00", price: 350, strike1Premium: 8 },
      { time: "12:30", price: 360, strike1Premium: 20 },
      { time: "13:00", price: 370, strike1Premium: 20 },
      { time: "13:30", price: 380, strike1Premium: 7 },
    ],
  };

  useEffect(() => {
    const selectedData = sampleData[filter] || [];
    setChartData(selectedData);
  }, [filter]);

  const filteredData = chartData.filter(
    (data) => strike1 === "" || data.strike1Premium === parseInt(strike1)
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleHistoricalDateChange = (e) => {
    setHistoricalDate(e.target.value);
  };

  const handleLiveChange = (e) => {
    setIsLive(e.target.checked);
  };

  const handleStrike1Change = (e) => {
    setStrike1(e.target.value);
  };

  return (
    <div class="flex">
        <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar/>
        </div>
    <div class="w-5/6 p-4  bg-gray-50 min-h-screen">
      <div class="flex flex-col items-starting border-b pb-4">
        <h1 class="text-2xl font-bold mb-4">Straddle</h1>

        <div class="flex flex-wrap gap-4 items-center">
          {/* Filter */}
          <select
            class="border rounded px-4 py-2"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="NIFTY">NIFTY</option>
            <option value="BANKNIFTY">BANKNIFTY</option>
            <option value="ABC">ABC</option>
            <option value="XYZ">XYZ</option>
          </select>

          {/* Expiry Date Picker */}
          <input
            type="date"
            class="border rounded px-4 py-2"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />

          {/* Strike 1 Dropdown */}
          <select
            class="border rounded px-4 py-2"
            value={strike1}
            onChange={handleStrike1Change}
          >
            <option value="">Select Strike 1</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="17">17</option>
            <option value="20">20</option>
            <option value="22">22</option>
          </select>

          {/* Live Checkbox */}
          <div class="flex items-center">
            <input
              type="checkbox"
              class="mr-2"
              checked={isLive}
              onChange={handleLiveChange}
            />
            <label>Live</label>
          </div>

          {/* Historical Date Picker */}
          <input
            type="date"
            class="border rounded px-4 py-2"
            value={historicalDate}
            onChange={handleHistoricalDateChange}
          />
        </div>
      </div>

      {/* Graph Section */}
      <div class="mt-10 flex flex-col items-center">
        <div class="w-full h-78 bg-white border rounded shadow flex items-center justify-center">
          {/* Line Chart for Straddle */}
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis label={{ value: "Price", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="strike1Premium"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p class="mt-4 text-gray-600 text-sm italic">
          Note: In the case of illiquid options, this data may vary.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Straddle;
