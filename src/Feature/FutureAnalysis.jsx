import React from 'react'

const FutureAnalysis = () => {
  return (
    <div>
        <div class="text-slate-100 flex justify-center text-2xl font-bold h-40 p-20 ">
        <p>
        Futures Trading with SwarajyAlgo</p></div>
      <div class="space-x-4r grid grid-cols-4 gap-4 flex justify-center item-center  ">
        <div class="">
          <p>our Services</p>
        </div>
        <div class="col-span-1 p-4 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src="src\Feature\image1.png" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Futures Analysis:</div>
              <p className="text-gray-700 text-base">
              Gain valuable insights into futures market trends and price predictions.
             <a href="feature" class='text-blue-700'>more...</a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src="src\Feature\image1.png"  />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">SLong vs Short:</div>
              <p className="text-gray-700 text-base">
              Compare long and short strategies to find the best approach to futures trading.
              <a href="futureLongVsShort" class='text-blue-700'>more...</a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src="src\Feature\image1.png"  />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Price vs OI:</div>
              <p className="text-gray-700 text-base">
              "Track price movements in relation to open interest to understand market
              direction  <a href="priceVsIO"class='text-blue-700'>more...</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FutureAnalysis
