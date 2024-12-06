import React from "react";
import NavBar from "../NavBar/NavBar";

const NewUser = () => {
  return (
    // <><NavBar /><div class=" flex justify-center item-center  ">

    //       <form className="max-w-md mx-auto mt-20 bg-gray-200 px-20 py-20 w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
    //           <h1 class="text-2xl font-bold text-blue-800 mb-4 text-center">
    //               Register New User
    //           </h1>
    //           <div className="relative z-0 w-full mb-5 group">
    //               <input
    //                   type="email"
    //                   name="floating_email"
    //                   id="floating_email"
    //                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                   placeholder=" "
    //                   required />
    //               <label
    //                   for="floating_email"
    //                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //               >
    //                   Email address
    //               </label>
    //           </div>
    //           <div className="relative z-0 w-full mb-5 group">
    //               <input
    //                   type="password"
    //                   name="floating_password"
    //                   id="floating_password"
    //                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                   placeholder=" "
    //                   required />
    //               <label
    //                   for="floating_password"
    //                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //               >
    //                   Password
    //               </label>
    //           </div>
    //           <div className="relative z-0 w-full mb-5 group">
    //               <input
    //                   type="password"
    //                   name="repeat_password"
    //                   id="floating_repeat_password"
    //                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                   placeholder=" "
    //                   required />
    //               <label
    //                   for="floating_repeat_password"
    //                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //               >
    //                   Confirm password
    //               </label>
    //           </div>
    //           <div className="grid md:grid-cols-2 md:gap-6">
    //               <div className="relative z-0 w-full mb-5 group">
    //                   <input
    //                       type="text"
    //                       name="floating_first_name"
    //                       id="floating_first_name"
    //                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                       placeholder=" "
    //                       required />
    //                   <label
    //                       for="floating_first_name"
    //                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //                   >
    //                       First name
    //                   </label>
    //               </div>
    //               <div className="relative z-0 w-full mb-5 group">
    //                   <input
    //                       type="text"
    //                       name="floating_last_name"
    //                       id="floating_last_name"
    //                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                       placeholder=" "
    //                       required />
    //                   <label
    //                       for="floating_last_name"
    //                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //                   >
    //                       Last name
    //                   </label>
    //               </div>
    //           </div>
    //           <div className="grid md:grid-cols-2 md:gap-6">
    //               <div className="relative z-0 w-full mb-5 group">
    //                   <input
    //                       type="tel"
    //                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //                       name="floating_phone"
    //                       id="floating_phone"
    //                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                       placeholder=" "
    //                       required />
    //                   <label
    //                       for="floating_phone"
    //                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //                   >
    //                       Phone number
    //                   </label>
    //               </div>
    //               <div className="relative z-0 w-full mb-5 group">
    //                   <input
    //                       type="text"
    //                       name="floating_company"
    //                       id="floating_company"
    //                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //                       placeholder=" "
    //                       required />
    //                   <label
    //                       for="floating_company"
    //                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //                   >
    //                       Company Name
    //                   </label>
    //               </div>
    //           </div>
    //           <button
    //               type="submit"
    //               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //               Submit
    //           </button>

    //       </form>
    //   </div></>


    <><NavBar /><div class="min-h-screen flex justify-center items-center p-4">
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-2xl font-bold text-blue-800 mb-4 text-center">
        Register New User
      </h1>
      <p class="text-gray-600 text-center mb-6"></p>
      <form class="space-y-4">
        <div>
          <label
            htmlFor="name"
            class="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required />
        </div>

        <div>
          <label
            htmlFor="email"
            class="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required />
        </div>

        <div>
          <label
            htmlFor="password"
            class="block text-gray-700 font-medium mb-2"
          >
           Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required />
        </div>
        <div>
          <label
            htmlFor="number"
            class="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Enter your phone number"
            class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required />
        </div>


        <div>
          <button
            type="submit"
            class="w-full bg-blue-900 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign-in
          </button>
        </div>

        <p class="flex w-full justify-center  font-semibold text-indigo-600 hover:text-indigo-500">
          {" "}
          OR
        </p>
        <div>
          <a
            href="login"
            class="flex w-full justify-center font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign-up
          </a>
        </div>
      </form>
    </div>
  </div>
  
  
  </>
  );
};

export default NewUser;
