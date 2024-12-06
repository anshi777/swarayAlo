import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import NavBar from "../NavBar/NavBar";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const IOAnalysis = () => {
  const [strikeCount, setStrikeCount] = useState(30);
  // Data for Open Interest Bar Chart
  const openInterestData = {
    labels: Array.from({ length: strikeCount }, (_, i) => `Strike ${i + 1}`),
    datasets: [
      {
        label: "CE OI Change",
        data: Array.from({ length: strikeCount }, () =>
          Math.floor(Math.random() * 4000 + 1000)
        ),
        backgroundColor: "rgba(54, 162, 235, 0.7)", // Blue
      },
      {
        label: "PE OI Change",
        data: Array.from({ length: strikeCount }, () =>
          Math.floor(Math.random() * 4000 + 1000)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.7)", // Red
      },
    ],
  };

  // Data for Line Chart
  const futureLineData = {
    labels: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    datasets: [
      {
        label: "Future",
        data: [10100, 10200, 10150, 10300, 10250],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.5, // Smooth curve
        fill: true,
      },
    ],
  };

  return (
    <div class="flex">
      <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar />
      </div>
      <div class="w-5/6 p-4 bg-gray-50 min-h-screen">
        <div class="flex flex-wrap gap-4 mb-6">
          <div class="flex flex-col">
            <label htmlFor="symbol" class="text-sm text-gray-600">
              Symbol
            </label>
            <select id="symbol" class="border rounded-md p-2">
              <option value="NIFTY">NIFTY</option>
              <option value="BANKNIFTY">BANKNIFTY</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label htmlFor="expiry" class="text-sm text-gray-600">
              Expiry
            </label>
            <input
              id="expiry"
              type="date"
              class="border rounded-md p-2"
              defaultValue="2024-12-12"
            />
          </div>

          <div class="flex flex-col">
            <label htmlFor="strikeCount" class="text-sm text-gray-600">
              Strike Count
            </label>
            <select
              id="strikeCount"
              class="border rounded-md p-2"
              value={strikeCount}
              onChange={(e) => setStrikeCount(Number(e.target.value))}
            >
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex flex-col">
              <label htmlFor="duration" class="text-sm text-gray-600">
                Duration
              </label>
              <select id="duration" class="border rounded-md p-2">
                <option value="day">Day</option>
                <option value="hour">Hour</option>
              </select>
            </div>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Live
            </button>
          </div>
        </div>

        {/* Charts Section */}
        <div class="grid grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div class="col-span-2">
            <h2 class="text-lg font-semibold mb-4">Open Interest</h2>
            <Bar data={openInterestData} options={{ responsive: true }} />
            <div class="col-span-2">
            <Bar data={openInterestData} options={{ responsive: true }} />
          </div>
          </div>
          

          {/* Right Section: Move to top-right */}
          <div class="col-span-1 flex flex-col space-y-6">
            <div class="bg-gray-100 p-8 rounded-lg shadow-md flex-2">
              <h3 class="text-sm font-medium mb-4">Future</h3>
              <Line data={futureLineData} options={{ responsive: true }} />
            </div>

            {/* Static Change in OI */}
            <div class="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 class="text-sm font-medium">Change in OI</h3>
              <div class="flex justify-between mt-4">
                <span class="text-green-600">CALL</span>
                <span>574.3L</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-red-600">PUT</span>
                <span>432.1L</span>
              </div>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 class="text-sm font-medium">Total OI</h3>
              <div class="flex justify-between mt-4">
                <span class="text-green-600">CALL</span>
                <span>574.3L</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-red-600">PUT</span>
                <span>432.1L</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOAnalysis;

