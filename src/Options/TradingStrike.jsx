import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TradingStrike = () => {
  const [data, setData] = useState(generateRandomData());
  const [mode, setMode] = useState(""); // Toggle between Live and Historical mode

  // Function to generate random data
  function generateRandomData() {
    const dataArray = [];
    for (let i = 0; i < 10; i++) {
      dataArray.push({
        time: `T${i + 1}`,
        value1: Math.floor(Math.random() * 500000),
        value2: Math.floor(Math.random() * 500000),
        value3: Math.floor(Math.random() * 500000),
        value4: Math.floor(Math.random() * 500000),
        value5: Math.floor(Math.random() * 500000),
        areaValue: Math.floor(Math.random() * 500000), 
      });
    }
    return dataArray;
  }

  // Toggle Live/Historical mode
  const toggleMode = () => {
    setMode(mode === "Live" ? "Stop" : "Live");
    setData(generateRandomData()); 
  };

  return (
    <div class="flex">
      <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar />
      </div>
      <div className="bg-gray-100 shadow-lg min-h-screen w-5/6 p-4">
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col rounded-lg shadow-md h-10">
            <label htmlFor="Expiry" className="shadow-md text-sm bg-gray-100 border-none text-lg"></label>
            <input
              id="expiry"
              type="date"
              className="border-rounded-md border-none bg-gray-100 p-4 shadow-lg"
            />
          </div>
          <div>
            <label>
                <select className="border-none bg-gray-100 shadow-lg">
                    <option value="">SELECT SYMBOL</option>
                    <option value="NIFTY">NIFTY</option>
                    <option value="FINNIFTY">FINNIFTY</option>
                    <option value="BANKNIFTY">BANKNIFTY</option>
                </select>
            </label>
          </div>
          <div>
            <label>
                <select className="border-none bg-gray-100 shadow-lg">
                    <option value="">Interval</option>
                    <option value="">2min</option>
                    <option value="">5mint</option>
                    <option value="">6mint</option>
                </select>
            </label>
          </div>
          <div className="px-4 py-2 rounded-lg text-white bg-blue-600">
            <button onClick={toggleMode} className="bg-blue">
              Live: {mode}
            </button>
          </div>
          <div className="flex flex-col rounded-lg shadow-md h-10">
            <label htmlFor="Expiry" className="shadow-md text-sm bg-gray-100 border-none text-lg"></label>
            <input
              id="history"
              type="date"
              className="border-rounded-md border-none bg-gray-100 p-4 shadow-lg"
            />
          </div>
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-3 gap-12 mt-10">
          

          {/* Line Chart */}
          <div className="bg-white shadow-md rounded-lg p-4 col-span-2 ">
            <h2 className="text-lg font-semibold mb-4">Line Chart with 5 Lines</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip formatter={(value) => `${value}`} />
                <Legend />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" name="Line 1" />
                <Line type="monotone" dataKey="value2" stroke="#82ca9d" name="Line 2" />
                <Line type="monotone" dataKey="value3" stroke="#ffc658" name="Line 3" />
                <Line type="monotone" dataKey="value4" stroke="#ff7300" name="Line 4" />
                <Line type="monotone" dataKey="value5" stroke="#387908" name="Line 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Area Chart */}
          <div className="bg-white shadow-md rounded-lg p-2 ">
            <h2 className="text-lg font-semibold mb-2">Area Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip formatter={(value) => `${value}`} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="areaValue"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  name="Area Data"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TradingStrike;
