import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavBar from '../NavBar/NavBar';

const stockData = {
  NIFTY: [
    { time: '10:00', price: 100, io: 50 },
    { time: '10:30', price: 120, io: 60 },
    { time: '11:00', price: 150, io: 80 },
    { time: '11:30', price: 170, io: 90 },
    { time: '12:00', price: 200, io: 110 },
  ],
  BANKNIFTY: [
    { time: '10:00', price: 90, io: 40 },
    { time: '10:30', price: 110, io: 55 },
    { time: '11:00', price: 140, io: 75 },
    { time: '11:30', price: 160, io: 85 },
    { time: '12:00', price: 190, io: 100 },
  ],
  FININFTY: [
    { time: '10:00', price: 80, io: 30 },
    { time: '10:30', price: 100, io: 50 },
    { time: '11:00', price: 130, io: 70 },
    { time: '11:30', price: 150, io: 85 },
    { time: '12:00', price: 180, io: 95 },
  ],

  BANKNFTY: [
    { time: '10:00', price: 800, io: 50 },
    { time: '10:30', price: 200, io: 50 },
    { time: '11:00', price: 320, io: 70 },
    { time: '11:30', price: 850, io: 85 },
    { time: '12:00', price: 180, io: 95 },
  ],
  ABC: [
    { time: '10:00', price: 900, io: 80 },
    { time: '10:30', price: 112, io: 50 },
    { time: '11:00', price: 380, io: 70 },
    { time: '11:30', price: 250, io: 95 },
    { time: '12:00', price: 350, io: 5 },
  ],
  XYZ: [
    { time: '10:00', price: 500, io: 20 },
    { time: '10:30', price: 212, io: 50 },
    { time: '11:00', price: 880, io: 10 },
    { time: '11:30', price: 550, io: 85 },
    { time: '12:00', price: 850, io: 50 },
  ],
};

const PriceVsIO = () => {
  const [selectedStock, setSelectedStock] = useState('NIFTY');
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [isLive, setIsLive] = useState(false);
  const [filteredData, setFilteredData] = useState(stockData[selectedStock]);

  // Handle stock symbol change
  const handleStockChange = (e) => {
    setSelectedStock(e.target.value);
    setFilteredData(stockData[e.target.value]);
  };

  // Simulate live data updates
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        const liveUpdate = [...filteredData];
        liveUpdate.push({
          time: `12:${Math.floor(Math.random() * 59) + 1}`,
          price: Math.floor(Math.random() * 50) + 200,
          io: Math.floor(Math.random() * 50) + 100,
        });
        setFilteredData(liveUpdate);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isLive, filteredData]);

  return (

    <div class="flex">
    <div class="w-1/6 bg-blue-700 p-8 text-white">
    <NavBar/>
    </div>
    <div class="h-screen w-screen flex flex-col bg-gray-100">
      <div class="flex justify-center items-center gap-4 p-4 bg-white shadow-md">
        <div>
          <label
            htmlFor="stock"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Stock Symbol
          </label>
          <select
            id="stock"
            value={selectedStock}
            onChange={handleStockChange}
            class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="NIFTY">NIFTY</option>
            <option value="BANKNIFTY">BANKNIFTY</option>
            <option value="FININFTY">FININFTY</option>
            <option value="BANCKNIFT">BANKNFTY</option>
            <option value="ABC">ABC</option>
            <option value="XYZ">XYZ</option>
          </select>
        </div>
        <div class="flex items-center space-x-2">
          <input
            id="live"
            type="checkbox"
            checked={isLive}
            onChange={(e) => setIsLive(e.target.checked)}
            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="live" class="text-sm font-medium text-gray-700">
            Live Data
          </label>
        </div>
        <div>
          <label
            htmlFor="expiry-date"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Expiry Date
          </label>
          <DatePicker
            selected={expiryDate}
            onChange={(date) => setExpiryDate(date)}
            class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       
      </div>

      {/* Chart Section */}
      <div class="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis
              yAxisId="left"
              label={{
                value: 'Price ($)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: 'IO',
                angle: 90,
                position: 'insideRight',
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="io"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default PriceVsIO;
