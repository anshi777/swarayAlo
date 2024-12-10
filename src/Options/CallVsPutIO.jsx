import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import NavBar from "../NavBar/NavBar";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

// Function to generate random data
const generateRandomData = (numPoints) => {
  return Array.from({ length: numPoints }, () =>
    Math.floor(Math.random() * 500)
  );
};

const CallVsPutIO = () => {
  const [data, setData] = useState({
    labels: Array.from({ length: 20 }, (_, i) => `Point ${i + 1}`),
    datasets: [
      {
        label: "Call",
        data: generateRandomData(20),
        borderColor: "rgb(42, 157, 244)",
        backgroundColor: "rgba(42, 157, 244, 0.2)",
        fill: true,
      },
      {
        label: "Put",
        data: generateRandomData(20),
        borderColor: "rgb(233, 30, 99)",
        backgroundColor: "rgba(233, 30, 99, 0.2)",
        fill: true,
      },
      {
        label: "Future",
        data: generateRandomData(20),
        borderColor: "black",
        borderDash: [5, 5],
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: false,
      },
    ],
  });

  const [options, setOptions] = useState({
    symbol: "NIFTY",
    expiry: "12/12/2024",
    interval: "3 Min",
    start: "11111",
    end: "888888",
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: generateRandomData(20),
        })),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="flex">
      <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar />
      </div>
      <div className="bg-gray-100 shadow-lg min-h-screen w-5/6 p-4">
        <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-md">
          {/* Header Section */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Put Call Ratio
            </h1>
          </div>

          {/* Filters Section */}
          <div className="grid grid-cols-4 gap-4 mb-6 shadow-lg p-8">
            {/* Symbol Dropdown */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium mb-1">Symbol</label>
              <select
                className="p-2 border rounded-md"
                value={options.symbol}
                onChange={(e) =>
                  setOptions({ ...options, symbol: e.target.value })
                }
              >
                <option value="NIFTY">NIFTY</option>
                <option value="BANKNIFTY">BANKNIFTY</option>
                <option value="FINNIFTY">FINNIFTY</option>
              </select>
            </div>

            {/* Expiry Date Picker */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium mb-1">Expiry</label>
              <input
                type="date"
                className="p-2 border rounded-md"
                value={options.expiry}
                onChange={(e) =>
                  setOptions({ ...options, expiry: e.target.value })
                }
              />
            </div>

            {/* Interval Dropdown */}

            <div className="flex flex-col">
              <label className="text-gray-600 font-medium mb-1">Interval</label>
              <select
                className="p-2 border rounded-md"
                value={options.interval}
                onChange={(e) =>
                  setOptions({ ...options, interval: e.target.value })
                }
              >
                <option value="1 Min">1 Min</option>
                <option value="3 Min">3 Min</option>
                <option value="5 Min">5 Min</option>
              </select>
            </div>

            {/* Range Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="range"
                className="w-4 h-4 mr-2"
                onChange={() => console.log("Range toggled")}
              />
              <label htmlFor="range" className="text-gray-600 font-medium">
                Range
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium mb-1">
                Rang Start
              </label>
              <select
                className="p-2 border rounded-md"
                value={options.start}
                onChange={(e) =>
                  setOptions({ ...options, start: e.target.value })
                }
              >
                <option value="11111 ">11111 </option>
                <option value="33333 ">33333 </option>
                <option value="55555 ">55555 </option>
                <option value="99999">99999</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium mb-1">Rang End</label>
              <select
                className="p-2 border rounded-md"
                value={options.end}
                onChange={(e) =>
                  setOptions({ ...options, end: e.target.value })
                }
              >
                <option value="66666">66666</option>
                <option value="77777">77777</option>
                <option value="88888">88888</option>
                <option value="99999">99999</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="range"
                className="w-4 h-4 mr-2"
                onChange={() => console.log("Range toggled")}
              />
              <label htmlFor="range" className="text-gray-600 font-medium">
                Live
              </label>
            </div>
          </div>

          {/* Chart and Summary Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Charts Section */}
            <div className="col-span-2 space-y-6">
              <div className="shadow-lg">
                <p className=" text-xl font-semibold">Change in OI</p>
                <Line
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: "Time",
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Open Interest",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="shadow-lg">
                <p className=" text-xl font-semibold">Total OI</p>
                <Line
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: "Time",
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Open Interest",
                        },
                      },
                    },
                  }}
                />
              </div>
              {/* Last Chart with only two lines */}
              <div className=" shadow-lg">
                <p className=" text-xl font-semibold">Difference of Put Call OI Change</p>
                <Line
                  data={{
                    ...data,
                    datasets: data.datasets.slice(1, 3), 
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: "Time",
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Open Interest",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Summary Section */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-md shadow">
                <h3 className="text-xl font-semibold text-blue-600">
                  Change in OI
                </h3>
                <p className="text-sm text-gray-500">Call: 521K</p>
                <p className="text-sm text-gray-500">Put: 343K</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow">
                <h3 className="text-xl font-semibold text-red-600">Total OI</h3>
                <p className="text-sm text-gray-500">Call: 1,884K</p>
                <p className="text-sm text-gray-500">Put: 1,550K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallVsPutIO;
