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

const StraddleSnapshot = () => {
  const [filter, setFilter] = useState("NIFTY");
  const [expiryDate, setExpiryDate] = useState("");
  const [historicalDate, setHistoricalDate] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [strikeCount, setStrikeCount] = useState(5); 

  const sampleData = {
    NIFTY: [
      { time: "8:00", strike1: 5, strike2: 8, strike3: 8, strike4: 20, strike5: 25, strike6: 30, strike7: 35, strike8: 40, strike9: 8, strike10: 0 },
      { time: "8:00", strike1: 5, strike2: 8, strike3: 8, strike4: 20, strike5: 25, strike6: 30, strike7: 35, strike8: 40, strike9: 8, strike10: 5 },
      { time: "8:00", strike1: 5, strike2: 8, strike3: 8, strike4: 20, strike5: 25, strike6: 30, strike7: 35, strike8: 40, strike9: 8, strike10: 80 },
      { time: "8:00", strike1: 5, strike2: 8, strike3: 8, strike4: 20, strike5: 25, strike6: 30, strike7: 35, strike8: 40, strike9: 8, strike10: 10 },
      { time: "8:00", strike1: 5, strike2: 8, strike3: 8, strike4: 20, strike5: 25, strike6: 30, strike7: 35, strike8: 40, strike9: 45, strike10: 20 },
      { time: "8:00", strike1: 5, strike2: 8, strike3: 8, strike4: 20, strike5: 25, strike6: 30, strike7: 35, strike8: 40, strike9: 45, strike10: 50 },
      { time: "8:30", strike1: 6, strike2: 11, strike3: 16, strike4: 21, strike5: 26, strike6: 31, strike7: 0, strike8: 41, strike9: 46, strike10: 51 },
      { time: "8:30", strike1: 6, strike2: 11, strike3: 16, strike4: 21, strike5: 26, strike6: 31, strike7: 36, strike8: 41, strike9: 46, strike10: 51 },
      { time: "8:30", strike1: 6, strike2: 11, strike3: 16, strike4: 21, strike5: 26, strike6: 31, strike7: 36, strike8: 41, strike9: 46, strike10: 51 },
      { time: "8:30", strike1: 6, strike2: 11, strike3: 16, strike4: 21, strike5: 26, strike6: 31, strike7: 36, strike8: 41, strike9: 46, strike10: 51 },
      { time: "11:00", strike1: 7, strike2: 12, strike3: 17, strike4: 22, strike5: 27, strike6: 32, strike7: 37, strike8: 0, strike9: 8, strike10: 52 },
      { time: "11:00", strike1: 7, strike2: 12, strike3: 17, strike4: 22, strike5: 27, strike6: 32, strike7: 37, strike8: 0, strike9: 47, strike10: 52 },
      { time: "11:00", strike1: 7, strike2: 12, strike3: 17, strike4: 22, strike5: 27, strike6: 32, strike7: 37, strike8: 0, strike9: 8, strike10: 52 },
      { time: "11:00", strike1: 7, strike2: 12, strike3: 17, strike4: 22, strike5: 27, strike6: 32, strike7: 37, strike8: 42, strike9: 8, strike10: 52 },
      { time: "11:30", strike1: 8, strike2: 13, strike3: 18, strike4: 23, strike5: 28, strike6: 33, strike7: 38, strike8: 43, strike9: 30, strike10: 53 },
      { time: "12:00", strike1: 9, strike2: 14, strike3: 19, strike4: 24, strike5: 29, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 9, strike2: 14, strike3: 19, strike4: 24, strike5: 29, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 5, strike2: 14, strike3: 19, strike4: 24, strike5: 5, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 0, strike2: 14, strike3: 19, strike4: 24, strike5: 5, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 4, strike2: 14, strike3: 19, strike4: 24, strike5: 5, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 50, strike2: 14, strike3: 19, strike4: 24, strike5: 29, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 8, strike2: 14, strike3: 19, strike4: 24, strike5: 29, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 9, strike2: 14, strike3: 19, strike4: 24, strike5: 29, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
      { time: "12:00", strike1: 78, strike2: 14, strike3: 19, strike4: 24, strike5: 29, strike6: 34, strike7: 39, strike8: 44, strike9: 49, strike10: 54 },
    ],
    BANKNIFTY: [
      { time: "8:00", strike1: 8, strike2: 14, strike3: 20, strike4: 26, strike5: 32, strike6: 38, strike7: 44, strike8: 50, strike9: 56, strike10: 62 },
      { time: "8:30", strike1: 9, strike2: 8, strike3: 21, strike4: 27, strike5: 33, strike6: 39, strike7: 8, strike8: 51, strike9: 57, strike10: 63 },
      { time: "8:30", strike1: 9, strike2: 8, strike3: 21, strike4: 27, strike5: 33, strike6: 39, strike7: 8, strike8: 51, strike9: 57, strike10: 63 },
      { time: "8:30", strike1: 9, strike2: 8, strike3: 21, strike4: 27, strike5: 33, strike6: 39, strike7: 8, strike8: 51, strike9: 57, strike10: 63 },
      { time: "8:30", strike1: 9, strike2: 8, strike3: 21, strike4: 27, strike5: 33, strike6: 39, strike7: 8, strike8: 51, strike9: 57, strike10: 63 },
      { time: "8:30", strike1: 9, strike2: 8, strike3: 21, strike4: 27, strike5: 33, strike6: 39, strike7: 8, strike8: 51, strike9: 57, strike10: 63 },
      { time: "11:00", strike1: 8, strike2: 16, strike3: 22, strike4: 28, strike5: 34, strike6: 40, strike7: 46, strike8: 52, strike9: 58, strike10: 64 },
      { time: "11:30", strike1: 11, strike2: 17, strike3: 23, strike4: 29, strike5: 35, strike6: 41, strike7: 8, strike8: 53, strike9: 59, strike10: 65 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 36, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 66 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 36, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 36, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 36, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 36, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 36, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 45, strike5: 36, strike6: 0, strike7: 45, strike8: 54, strike9: 60, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 45, strike5: 36, strike6: 0, strike7: 45, strike8: 54, strike9: 60, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 45, strike5: 36, strike6: 0, strike7: 45, strike8: 54, strike9: 60, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 45, strike5: 36, strike6: 0, strike7: 45, strike8: 54, strike9: 60, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 45, strike5: 36, strike6: 0, strike7: 45, strike8: 54, strike9: 60, strike10: 8 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 45, strike5: 36, strike6: 0, strike7: 45, strike8: 54, strike9: 20, strike10: 66 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 0, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 66 },
      { time: "12:00", strike1: 12, strike2: 18, strike3: 24, strike4: 30, strike5: 0, strike6: 0, strike7: 30, strike8: 54, strike9: 20, strike10: 66 },
    ],
  };

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const selectedData = sampleData[filter] || [];
    setChartData(selectedData);
  }, [filter]);

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

  const handleStrikeCountChange = (e) => {
    setStrikeCount(Number(e.target.value));
  };

  return (
    <div class="flex">
      <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar />
      </div>
      <div class="w-5/6 p-4 bg-gray-50 min-h-screen">
        <div class="flex flex-col items-start border-b pb-4">
          <h1 class="text-2xl font-bold mb-4">Straddle Snapshot</h1>

          <div class="flex flex-wrap gap-4 items-center">
            {/* Filter */}
            <select
              class="border rounded px-4 py-2"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="NIFTY">NIFTY</option>
              <option value="BANKNIFTY">BANKNIFTY</option>
            </select>

            {/* Expiry Date Picker */}
            <input
              type="date"
              class="border rounded px-4 py-2"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />

            {/* Strike Count Filter */}
            <select
              class="border rounded px-4 py-2"
              value={strikeCount}
              onChange={handleStrikeCountChange}
            >
              <option value={5}>5 Strikes</option>
              <option value={10}>10 Strikes</option>
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
          <ResponsiveContainer width="80%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Array.from({ length: strikeCount }).map((_, index) => (
                <Line
                  key={`strike${index + 1}`}
                  type="monotone"
                  dataKey={`strike${index + 1}`}
                  stroke={["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#ff0000", "#00c49f", "#ff7f50", "#6495ed", "#e9967a", "#8a2be2"][index]} // Dynamic colors
                  strokeWidth={2}
                  name={`Strike ${index + 1}`}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StraddleSnapshot;

