import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const initialData = [
  {
    symbol: "KEI",
    ltp: 4428,
    priceChange: 29.1,
    percentChange: 0.66,
    oi: "155K",
    oiChange: 89700,
    percentOiChange: 57.72,
    expiry: "26-12-24",
  },
  {
    symbol: "MAXHEALTH",
    ltp: 1056.55,
    priceChange: 28.25,
    percentChange: 2.67,
    oi: "689K",
    oiChange: 288750,
    percentOiChange: 41.89,
    expiry: "26-12-24",
  },
  {
    symbol: "SONACOMS",
    ltp: 698.6,
    priceChange: 20.8,
    percentChange: 2.98,
    oi: "878K",
    oiChange: 352625,
    percentOiChange: 40.16,
    expiry: "26-12-24",
  },
  {
    symbol: "KALYANKJIL",
    ltp: 702.2,
    priceChange: -35.5,
    percentChange: -5.06,
    oi: "2056K",
    oiChange: 781200,
    percentOiChange: 37.99,
    expiry: "26-12-24",
  },
  {
    symbol: "XYZ",
    ltp: 500,
    priceChange: -50,
    percentChange: -10,
    oi: "300K",
    oiChange: -150000,
    percentOiChange: -50,
    expiry: "26-12-24",
  },
  {
    symbol: "ABC",
    ltp: 1220,
    priceChange: 45.5,
    percentChange: 3.88,
    oi: "1100K",
    oiChange: 300000,
    percentOiChange: 27.2,
    expiry: "26-12-24",
  },
  {
    symbol: "DEF",
    ltp: 1025.5,
    priceChange: -25,
    percentChange: -2.38,
    oi: "650K",
    oiChange: 200000,
    percentOiChange: 30.1,
    expiry: "26-12-24",
  },
  {
    symbol: "GHI",
    ltp: 1105,
    priceChange: 15.3,
    percentChange: 1.42,
    oi: "900K",
    oiChange: -180000,
    percentOiChange: -20.0,
    expiry: "26-12-24",
  },
  {
    symbol: "MNO",
    ltp: 760,
    priceChange: 18.5,
    percentChange: 2.5,
    oi: "1250K",
    oiChange: 500000,
    percentOiChange: 40.0,
    expiry: "26-12-24",
  },
  {
    symbol: "PQR",
    ltp: 480,
    priceChange: -20,
    percentChange: -4.0,
    oi: "800K",
    oiChange: 100000,
    percentOiChange: 12.5,
    expiry: "26-12-24",
  },

  {
    symbol: "KEI",
    ltp: 4428,
    priceChange: 29.1,
    percentChange: 0.66,
    oi: "155K",
    oiChange: 89700,
    percentOiChange: 57.72,
    expiry: "26-12-24",
  },
  {
    symbol: "MAXHEALTH",
    ltp: 1056.55,
    priceChange: 28.25,
    percentChange: 2.67,
    oi: "689K",
    oiChange: 288750,
    percentOiChange: 41.89,
    expiry: "26-12-24",
  },
  {
    symbol: "SONACOMS",
    ltp: 698.6,
    priceChange: 20.8,
    percentChange: 2.98,
    oi: "878K",
    oiChange: 352625,
    percentOiChange: 40.16,
    expiry: "26-12-24",
  },
  {
    symbol: "KALYANKJIL",
    ltp: 702.2,
    priceChange: -35.5,
    percentChange: -5.06,
    oi: "2056K",
    oiChange: 781200,
    percentOiChange: 37.99,
    expiry: "26-12-24",
  },
  {
    symbol: "XYZ",
    ltp: 500,
    priceChange: -50,
    percentChange: -10,
    oi: "300K",
    oiChange: -150000,
    percentOiChange: -50,
    expiry: "26-12-24",
  },
  {
    symbol: "ABC",
    ltp: 1220,
    priceChange: 45.5,
    percentChange: 3.88,
    oi: "1100K",
    oiChange: 300000,
    percentOiChange: 27.2,
    expiry: "26-12-24",
  },
  {
    symbol: "DEF",
    ltp: 1025.5,
    priceChange: -25,
    percentChange: -2.38,
    oi: "650K",
    oiChange: 200000,
    percentOiChange: 30.1,
    expiry: "26-12-24",
  },
  {
    symbol: "GHI",
    ltp: 1105,
    priceChange: 15.3,
    percentChange: 1.42,
    oi: "900K",
    oiChange: -180000,
    percentOiChange: -20.0,
    expiry: "26-12-24",
  },
  {
    symbol: "KEI",
    ltp: 4428,
    priceChange: 29.1,
    percentChange: 0.66,
    oi: "155K",
    oiChange: 89700,
    percentOiChange: 57.72,
    expiry: "26-12-24",
  },
  {
    symbol: "MAXHEALTH",
    ltp: 1056.55,
    priceChange: 28.25,
    percentChange: 2.67,
    oi: "689K",
    oiChange: 288750,
    percentOiChange: 41.89,
    expiry: "26-12-24",
  },
  {
    symbol: "SONACOMS",
    ltp: 698.6,
    priceChange: 20.8,
    percentChange: 2.98,
    oi: "878K",
    oiChange: 352625,
    percentOiChange: 40.16,
    expiry: "26-12-24",
  },
  {
    symbol: "KALYANKJIL",
    ltp: 702.2,
    priceChange: -35.5,
    percentChange: -5.06,
    oi: "2056K",
    oiChange: 781200,
    percentOiChange: 37.99,
    expiry: "26-12-24",
  },
  {
    symbol: "XYZ",
    ltp: 500,
    priceChange: -50,
    percentChange: -10,
    oi: "300K",
    oiChange: -150000,
    percentOiChange: -50,
    expiry: "26-12-24",
  },
  {
    symbol: "ABC",
    ltp: 1220,
    priceChange: 45.5,
    percentChange: 3.88,
    oi: "1100K",
    oiChange: 300000,
    percentOiChange: 27.2,
    expiry: "26-12-24",
  },
  {
    symbol: "DEF",
    ltp: 1025.5,
    priceChange: -25,
    percentChange: -2.38,
    oi: "650K",
    oiChange: 200000,
    percentOiChange: 30.1,
    expiry: "26-12-24",
  },
  {
    symbol: "GHI",
    ltp: 1105,
    priceChange: 15.3,
    percentChange: 1.42,
    oi: "900K",
    oiChange: -180000,
    percentOiChange: -20.0,
    expiry: "26-12-24",
  },
  {
    symbol: "MNO",
    ltp: 760,
    priceChange: 18.5,
    percentChange: 2.5,
    oi: "1250K",
    oiChange: 500000,
    percentOiChange: 40.0,
    expiry: "26-12-24",
  },
  {
    symbol: "PQR",
    ltp: 480,
    priceChange: -20,
    percentChange: -4.0,
    oi: "800K",
    oiChange: 100000,
    percentOiChange: 12.5,
    expiry: "26-12-24",
  },
];

const Feature = () => {
  const [filteredData, setFilteredData] = useState(initialData);

  const filterData = (filterType) => {
    let filtered = [];
    if (filterType === "fullData") {
      filtered = initialData;
    } else if (filterType === "shortBuild") {
      filtered = initialData.filter(
        (row) => row.oiChange < 0 && row.percentOiChange < 0 && row.priceChange > 0
      );
    } else if (filterType === "longUnwinding") {
      filtered = initialData.filter(
        (row) =>
          row.oiChange > 0 &&
          row.percentOiChange > 0 &&
          row.priceChange < 0 &&
          row.percentChange < 0
      );
    } else if (filterType === "longBuild") {
      filtered = initialData.filter(
        (row) => row.oiChange > 0 && row.percentOiChange > 0 && row.priceChange > 0
      );
    }
    setFilteredData(filtered);
  };

  return (
    <>
      <div class="flex">
        <div class="w-1/6 bg-blue-700 p-8 text-white">
        <NavBar/>
        </div>

        <div class="w-5/6 p-4 bg-gray-700 text-white min-h-screen">
          <h1 class="text-2xl font-bold mb-4 text-center">Futures OI Analysis</h1>
          <div class="flex space-x-4 mb-4 justify-end">
            <button
              onClick={() => filterData("fullData")}
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Full Data
            </button>
            <button
              onClick={() => filterData("longBuild")}
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Long Build
            </button>
            <button
              onClick={() => filterData("shortBuild")}
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Short Build
            </button>
            <button
              onClick={() => filterData("longUnwinding")}
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
            >
              Long Unwinding
            </button>
          </div>

          {/* Table */}
          <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-500 w-full text-center">
              <thead>
                <tr class="bg-gray-600">
                  <th class="border border-gray-500 px-4 py-2">Symbol</th>
                  <th class="border border-gray-500 px-4 py-2">LTP</th>
                  <th class="border border-gray-500 px-4 py-2">Price Change</th>
                  <th class="border border-gray-500 px-4 py-2">% Change</th>
                  <th class="border border-gray-500 px-4 py-2">OI</th>
                  <th class="border border-gray-500 px-4 py-2">OI Change</th>
                  <th class="border border-gray-500 px-4 py-2">% OI Change</th>
                  <th class="border border-gray-500 px-4 py-2">Expiry</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index} class="hover:bg-gray-600">
                    <td class="border border-gray-500 px-4 py-2">{row.symbol}</td>
                    <td class="border border-gray-500 px-4 py-2">{row.ltp}</td>
                    <td
                      class={`border border-gray-500 px-4 py-2 ${row.priceChange > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {row.priceChange}
                    </td>
                    <td
                      class={`border border-gray-500 px-4 py-2 ${row.percentChange > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {row.percentChange}
                    </td>
                    <td class="border border-gray-500 px-4 py-2">{row.oi}</td>
                    <td
                      class={`border border-gray-500 px-4 py-2 ${row.oiChange > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {row.oiChange}
                    </td>
                    <td
                      class={`border border-gray-500 px-4 py-2 ${row.percentOiChange > 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {row.percentOiChange}
                    </td>
                    <td class="border border-gray-500 px-4 py-2">{row.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
