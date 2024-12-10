import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
} from "chart.js";
import NavBar from "../NavBar/NavBar";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Filler);

// Function to generate random data
const generateRandomData = (numPoints) => {
  return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100));
};

const AtmPremium = () => {
  const [isLive, setIsLive] = useState(false);
  const [date,setDate] = useState()
  const [data, setData] = useState({
    labels: Array.from({ length: 60 }, (_, i) => ` ${i + 10}`),
    datasets: [
      {
        label: "ATM Premium",
        data: generateRandomData(60),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  });

  const handleDateChange =(e)=>{
    setDate(e.target.value)
  }

  useEffect(() => {
    let interval;
    if (isLive) {
      interval = setInterval(() => {
        setData((prevData) => ({
          ...prevData,
          datasets: prevData.datasets.map((dataset) => ({
            ...dataset,
            data: generateRandomData(60),
          })),
        }));
      }, 2000); 
    }

    return () => clearInterval(interval); 
  }, [isLive]);

  return (
    <><div className=" flex">
        <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar />
      </div>
      <div className="bg-gray-100 shadow-lg min-h-screen w-5/6 p-4">
        <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-md">
          

          <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">ATM PREMIUM</h1>
              <select > 
                <option>Instrument</option>
                <option>NIFTY</option>
                <option>FINNIFTY</option>
                <option>BANKNIFTY</option>
                </select>
                <input
              type="date"
              class="border rounded px-4 py-2"
              value={date}
              onChange={handleDateChange}
            />
                
              <button
                  onClick={() => setIsLive((prev) => !prev)} // Toggle live state
                  className={`px-4 py-2 text-white font-semibold rounded-md ${isLive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
              >
                  {isLive ? "Stop Live" : "Start Live"}
              </button>
          </div>

          
          <div className="mb-6">
              <Line
                  data={data}
                  options={{
                      responsive: true,
                      maintainAspectRatio: false,
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
                                  text: "Premium Value",
                              },
                          },
                      },
                  }}
                  height={400} />
          </div>
          </div>
          </div>
      </div></>
  );
};

export default AtmPremium;
