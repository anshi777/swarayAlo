import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import FutureAnalysis from "../Feature/FutureAnalysis";
import Option from "../Learning/Option";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <section >
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-xl lg:text-2xl dark:text-white">
              Smarter Trading with SwarajyAlgo TradeSuite
            </h1>
            <p className="mb-9 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-100">
              Access advanced trading tools, strategies, and AI-driven insights
              for smarter market decisions
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="login"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="login"
                className="py-3 px-5 sm:ms-4 text-sm font-medium text-blue-700 focus:outline-none bg-green-600 rounded-lg border border-gray-200 hover:bg-blue-800 hover:text-white-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 text-gray-100 dark:border-gray-600 hover:text-white dark:hover:bg-gray-700"
              >
                FREE TRIAL
              </a>
            </div>
          </div>
        </section>
        <div class="flex justify-center item-center ">
          <a
            href="#"
            className="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-blue-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="src\Home\image.png"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                About SwarajyAlgo
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                SwarajyAlgo is revolutionizing the trading experience with
                cutting-edge AI technology and advanced market analytics. Our
                platform offers powerful tools for both beginner and advanced
                traders in options, futures, and more
              </p>
            </div>
          </a>
        </div>
      </div>

      <div class="text-slate-100 flex justify-center text-2xl font-bold h-20  ">
        <p>Our Services</p>
      </div>
      <div class="space-x-4r grid grid-cols-4 gap-4  ">
        <div class="">
          <p>our Services</p>
        </div>
        <div class="col-span-1 p-4 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src="src\Home\image.png" alt="Service 1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Service 1</div>
              <p className="text-gray-700 text-base">
                Market Indicators : Real-time indicators to assist with trading
                decisions. <a href="#" class='text-blue-700'>more...</a>{" "}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #bitcoin
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #trading
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #sharmarket
              </span>
            </div>
          </div>
        </div>
        <div class="col-span-1 p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src="src\Home\image.png" alt="Service 2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Service 2</div>
              <p className="text-gray-700 text-base">
                Trading Strategies : Developed strategies for all market
                conditions <a href="#" class='text-blue-700'>more...</a>{" "}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #bitcoin
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #trading
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #sharmarket
              </span>
            </div>
          </div>
        </div>
        <div class="col-span-1 p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src="src\Home\image.png" alt="Service 3" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Service 3</div>
              <p className="text-gray-700 text-base">
                "AI Tools" : Leverage AI to make data-driven decisions.{" "}
                <a href="feature" class='text-blue-700'>more...</a>{" "}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #bitcoin
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #trading
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #sharmarket
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <FutureAnalysis />
      </div>
      {/* <div class=" flex justify-end">
        <Option />
      </div> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
