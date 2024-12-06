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

const MultiStrikeStraddle = () => {
  const [filter, setFilter] = useState("NIFTY");
  const [expiryDate, setExpiryDate] = useState("");
  const [historicalDate, setHistoricalDate] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [strike1, setStrike1] = useState("");
  const [strike2, setStrike2] = useState("");
  const [strike3, setStrike3] = useState("");
  const [chartData, setChartData] = useState([]);

  const sampleData = {
    NIFTY: [
      { time: "10:00", price: 100, strike1Premium: 5, strike2Premium: 5, strike3Premium: 5 },
      { time: "10:30", price: 120, strike1Premium: 5, strike2Premium: 5, strike3Premium: 5 },
      { time: "11:00", price: 130, strike1Premium: 5, strike2Premium: 5, strike3Premium: 5 },
      { time: "11:30", price: 140, strike1Premium: 7, strike2Premium: 9, strike3Premium: 10 },
      { time: "12:00", price: 150, strike1Premium: 7, strike2Premium: 10, strike3Premium: 11 },
      { time: "12:30", price: 160, strike1Premium: 7, strike2Premium: 11, strike3Premium: 12 },
      { time: "13:00", price: 170, strike1Premium: 5, strike2Premium: 12, strike3Premium: 13 },
      { time: "13:00", price: 170, strike1Premium: 5, strike2Premium: 12, strike3Premium: 13 },
      { time: "13:00", price: 170, strike1Premium: 5, strike2Premium: 12, strike3Premium: 13 },
      { time: "13:30", price: 180, strike1Premium: 7, strike2Premium: 13, strike3Premium: 14 },
      { time: "13:30", price: 180, strike1Premium: 7, strike2Premium: 13, strike3Premium: 14 },
      { time: "13:30", price: 180, strike1Premium: 7, strike2Premium: 13, strike3Premium: 14 },
      { time: "13:30", price: 180, strike1Premium: 7, strike2Premium: 13, strike3Premium: 14 },
      { time: "13:30", price: 180, strike1Premium: 7, strike2Premium: 13, strike3Premium: 14 },
      { time: "13:30", price: 180, strike1Premium: 7, strike2Premium: 13, strike3Premium: 14 },
      { time: "13:30", price: 180, strike1Premium: 22, strike2Premium: 13, strike3Premium: 14 },
    ],
    BANKNIFTY: [
      { time: "10:00", price: 200, strike1Premium: 5, strike2Premium: 6, strike3Premium: 7 },
      { time: "10:00", price: 200, strike1Premium: 5, strike2Premium: 6, strike3Premium: 7 },
      { time: "10:00", price: 200, strike1Premium: 5, strike2Premium: 6, strike3Premium: 7 },
      { time: "10:00", price: 200, strike1Premium: 5, strike2Premium: 6, strike3Premium: 7 },
      { time: "10:30", price: 220, strike1Premium: 7, strike2Premium: 8, strike3Premium: 9 },
      { time: "11:00", price: 230, strike1Premium: 7, strike2Premium: 8, strike3Premium: 10 },
      { time: "11:30", price: 240, strike1Premium: 20, strike2Premium: 25, strike3Premium: 30 },
      { time: "12:00", price: 250, strike1Premium: 20, strike2Premium: 25, strike3Premium: 35 },
      { time: "12:00", price: 250, strike1Premium: 20, strike2Premium: 25, strike3Premium: 35 },
      { time: "12:00", price: 250, strike1Premium: 20, strike2Premium: 25, strike3Premium: 35 },
      { time: "12:00", price: 250, strike1Premium: 20, strike2Premium: 25, strike3Premium: 35 },
      { time: "12:30", price: 260, strike1Premium: 20, strike2Premium: 25, strike3Premium: 40 },
      { time: "13:00", price: 270, strike1Premium: 20, strike2Premium: 30, strike3Premium: 45 },
      { time: "13:30", price: 280, strike1Premium: 5, strike2Premium: 5, strike3Premium: 5 },
      { time: "13:30", price: 280, strike1Premium: 5, strike2Premium: 5, strike3Premium: 5 },
      { time: "13:30", price: 280, strike1Premium: 5, strike2Premium: 5, strike3Premium: 5 },
    ],

  };

  useEffect(() => {
    const selectedData = sampleData[filter] || [];
    setChartData(selectedData);
  }, [filter]);

  const filteredData = chartData.filter(
    (data) =>
      (strike1 === "" || data.strike1Premium === parseInt(strike1)) &&
      (strike2 === "" || data.strike2Premium === parseInt(strike2)) &&
      (strike3 === "" || data.strike3Premium === parseInt(strike3))
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

  const handleStrike2Change = (e) => {
    setStrike2(e.target.value);
  };

  const handleStrike3Change = (e) => {
    setStrike3(e.target.value);
  };

  return (
    <div class="flex">
      <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar />
      </div>
      <div class="w-5/6 p-4 bg-gray-50 min-h-screen">
        <div class="flex flex-col items-start border-b pb-4">
          <h1 class="text-2xl font-bold mb-4">MultiStrikeStraddle</h1>

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

            {/* Strike 2 Dropdown */}
            <select
              class="border rounded px-4 py-2"
              value={strike2}
              onChange={handleStrike2Change}
            >
              <option value="">Select Strike 2</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="17">17</option>
              <option value="20">20</option>
            </select>

            {/* Strike 3 Dropdown */}
            <select
              class="border rounded px-4 py-2"
              value={strike3}
              onChange={handleStrike3Change}
            >
              <option value="">Select Strike 3</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="17">17</option>
              <option value="20">20</option>
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

        {/* Line Chart */}
        <div class="mt-8">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="strike1Premium"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="strike2Premium"
                stroke="#82ca9d"
              />
              <Line
                type="monotone"
                dataKey="strike3Premium"
                stroke="#ff7300"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MultiStrikeStraddle;
