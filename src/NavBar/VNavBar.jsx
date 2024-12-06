import React from 'react'
import logo2 from "../assets/logo2.png";
import Home from '../Home/Home';

const VNavBar = () => {
  return (
     <>
      <nav class="bg-violet-950 text-white">
              <div class="container mx-auto flex justify-between items-center py-4 px-6">
              <header class="w-full">
          <img
              src={logo2}
              alt="Company Banner"
              class="w h-25 object-cover" />
      </header>

                  <ul class="flex space-x-6">
                      <li class="group relative">
                          <button class="hover:underline">Company</button>
                          <ul class="absolute hidden group-hover:block bg-blue-800 shadow-md p-2 space-y-2">
                              <li><a href="#about" class="block hover:text-gray-300">About Us</a></li>
                              <li><a href="#contact" class="block hover:text-gray-300">Contact</a></li>
                          </ul>
                      </li>

                      <li class="group relative">
                          <button class="hover:underline">Services</button>
                          <ul class="absolute hidden group-hover:block bg-blue-800 shadow-md p-2 space-y-2">
                              <li><a href="#indicators" class="block hover:text-gray-300">Indicators</a></li>
                              <li><a href="#strategy" class="block hover:text-gray-300">Strategy</a></li>
                              <li><a href="#ai-tools" class="block hover:text-gray-300">AI Tools</a></li>
                          </ul>
                      </li>

                      <li class="group relative">
                          <button class="hover:underline">Futures</button>
                          <ul class="absolute hidden group-hover:block bg-blue-800 shadow-md p-2 space-y-2">
                              <li><a href="#futures-analysis" class="block hover:text-gray-300">Futures Analysis</a></li>
                              <li><a href="#long-vs-short" class="block hover:text-gray-300">Long vs Short</a></li>
                              <li><a href="#price-vs-oi" class="block hover:text-gray-300">Price vs OI</a></li>
                          </ul>
                      </li>

                      <li class="group relative">
                          <button class="hover:underline">Options</button>
                          <ul class="absolute hidden group-hover:block bg-blue-800 shadow-md p-2 space-y-2">
                              <li><a href="#oi-analysis" class="block hover:text-gray-300">OI Analysis</a></li>
                              <li><a href="#trending-strikes" class="block hover:text-gray-300">Trending Strikes</a></li>
                              <li><a href="#call-vs-put-oi" class="block hover:text-gray-300">Call vs Put OI</a></li>
                              <li><a href="#advanced-option-chain" class="block hover:text-gray-300">Advanced Option Chain</a></li>
                              <li><a href="#option-chain" class="block hover:text-gray-300">Option Chain</a></li>
                              <li><a href="#put-call-ratio" class="block hover:text-gray-300">Put-Call Ratio</a></li>
                          </ul>
                      </li>

                      <li><a href="#strategy" class="hover:underline">Strategy</a></li>
                      <li><a href="#contact" class="hover:underline">Contact</a></li>
                      <li><a href="#free-trial" class="hover:underline text-yellow-300 font-bold">FREE TRIAL</a></li>
                      <li><a href="#algo-trading" class="hover:underline">Algo Trading Platform</a></li>
                      <li><a href="#login" class="hover:underline">Login/Sign Up</a></li>
                  </ul>
              </div>
          </nav>
          <Home/></> 

   
  )
}

export default VNavBar
