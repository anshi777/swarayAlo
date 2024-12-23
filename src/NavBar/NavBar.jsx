import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div class="bg-blue-800 text-white h-screen w-60 fixed top-0 left-0 flex flex-col fixed">
        <div class="w-full bg-gray-100 p-4 flex flex-col items-center">
          <img src={logo} alt="SwarajyAlgo Logo" class="h-16 mb-2" />
          <h1 class="text-lg font-bold text-blue-800">
            SwarajyAlgo TradeSuite{" "}
          </h1>
          <p class="text-sm text-gray-700">
            Advanced Stock Market Solutions
          </p>
        </div>

        <ul class="mt-4 space-y-4 px-4">
          <li class=" group relative">
            <a href="/">Home</a>
          </li>
          <li class="group relative">
            <button class="hover:underline w-full text-left">
              Company
            </button>
            <ul class="hidden group-hover:block bg-blue-800 shadow-md mt-2 pl-4 space-y-2">
              <li>
                <a href="about" class="block hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="about" class="block hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </li>

          <li class="group relative">
            <button class="hover:underline w-full text-left">
              Services
            </button>
            <ul class="hidden group-hover:block bg-blue-800 shadow-md mt-2 pl-4 space-y-2">
              <li>
                <a href="service" class="block hover:text-gray-300">
                  {" "}
                  Indicators
                </a>
              </li>
              <li>
                <a href="service" class="block hover:text-gray-300">
                  Strategy
                </a>
              </li>
              <li>
                <a href="service" class="block hover:text-gray-300">
                  AI Tools
                </a>
              </li>
            </ul>
          </li>

          <li class="group relative">
            <button class="hover:underline w-full text-left">
              Futures
            </button>
            <ul class="hidden group-hover:block bg-blue-800 shadow-md mt-2 pl-4 space-y-2">
              <li>
                <a href="feature" class="block hover:text-gray-300">
                  {" "}
                  Futures Analysis
                </a>
              </li>
              <li>
                <a href="futureLongVsShort" class="block hover:text-gray-300">
                  Long vs Short
                </a>
              </li>
              <li>
                <a href="priceVsIO" class="block hover:text-gray-300">
                  Price vs OI
                </a>
              </li>
            </ul>
          </li>

          <li class="group relative">
            <button class="hover:underline w-full text-left">
              Options
            </button>
            <ul class="hidden group-hover:block bg-blue-800 shadow-md mt-2 pl-4 space-y-2">
              <li>
                <a href="IOAnalysis" class="block hover:text-gray-300">
                  {" "}
                  OI Analysis
                </a>
              </li>
              <li>
                <a href="tradingStrike" class="block hover:text-gray-300">
                  Trending Strikes
                </a>
              </li>
              <li>
                <a href="callVsPutIO" class="block hover:text-gray-300">
                  {" "}
                  Call vs Put OI
                </a>
              </li>
              <li>
                <a href="#contact" class="block hover:text-gray-300">
                  {" "}
                  Advanced Option Chain
                </a>
              </li>
              <li>
                <a href="#contact" class="block hover:text-gray-300">
                  {" "}
                  Option Chain
                </a>
              </li>
              <li>
                <a href="putCallRatio" class="block hover:text-gray-300">
                  {" "}
                  Put-Call Ratio
                </a>
              </li>
              <li>
                <a href="atmPremium" class="block hover:text-gray-300">
                  {" "}
                  ATM Premium
                </a>
              </li>
              <li>
                <a href="OptionPriceVsIO" class="block hover:text-gray-300">
                  {" "}
                  Price vs OI
                </a>
              </li>
              <li>
                <a href="longVsShort" class="block hover:text-gray-300">
                  Long & Short
                </a>
              </li>
            </ul>
          </li>

          <li class="group relative">
            <button class="hover:underline w-full text-left">
              Strategy
            </button>
            <ul class="hidden group-hover:block bg-blue-800 shadow-md mt-2 pl-4 space-y-2">
              <li>
                <a href="straddle" class="block hover:text-gray-300">
                  {" "}
                  Straddle Strangle:
                </a>
              </li>
              <li>
                <a href="multiStrikeStraddle" class="block hover:text-gray-300">
                  Multi Strike Straddle
                </a>
              </li>
              <li>
                <a href="straddleSnapshot" class="block hover:text-gray-300">
                  Straddle Snapshot
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="contactUs" class="hover:underline block">
              Contact
            </a>
          </li>
          <li>
            <a
              href="try"
              class="hover:underline block text-yellow-300 font-bold"
            >
              FREE TRIAL
            </a>
          </li>
          <li>
            <a href="login" class="hover:underline block">
              Login/Sign Up
            </a>
          </li>
        </ul>
      </div>
      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav> */}
    </> 





  );
};

export default NavBar;
