"use client";
import React from "react";

const RecruiterDashbord = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-[#f5e8e8]">
      {/* Header */}
      <div className="bg-[#17191c] h-28 border-gray-100 border-b-[1px] py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl text-white font-bold mr-4">HireLink</span>
        </div>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="mr-4 text-white">Andrew New</span>
            <div className="w-8 h-8 rounded-full bg-gray-500"></div>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Employees
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Jobs
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Candidates
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Leaves
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#17191c] h-64 border-gray-100 border-b-4 py-4 px-6 flex flex-col">
        <h1 className="text-white text-xl pt-4">Hello Swapnil</h1>
        <div className="flex py-4 w-full justify-between">
          <h1 className="text-white font-bold text-3xl">Good Morning</h1>
          <button className="bg-[#e11d48] text-white px-3 rounded-md">
            Add Opening
          </button>
        </div>

        <div>
          <div className="flex justify-evenly gap-10 mt-10">
            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#efeafa] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Total Openings</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">200</span>/200
              </p>
            </div>

            {/* 2nd card, for pending interviews */}

            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#cbf2f2] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.5 1h-5v5h5zm7.75 12.5h-5m0-5h5m-5 2.5h5m.25-5H8L10.75.5zM3 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">
                Pending Interviews
              </h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">12</span>/200
              </p>
            </div>

            {/* 3rd card, for pending offers */}

            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#e5ede6] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Pending Offers</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">15</span>/200
              </p>
            </div>

            {/* 4th card, for pending offers */}
            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#efeafa] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Pending Offers</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">15</span>/200
              </p>
            </div>

            {/* 5th card, for pending offers */}

            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#efeafa] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Pending Offers</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">15</span>/200
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashbord;

// "use client";
// import React from "react";

// const Dashboard = () => {
//   //The dropdown menu is implemented using a state variable dropdownOpen and a conditional rendering of the dropdown content. You'll need to import the useState hook from React and initialize dropdownOpen as a state variable in your component.
//   const [dropdownOpen, setDropdownOpen] = React.useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col">
//       {/* Header */}
//       <div className="bg-gray-900 py-4 px-6 flex justify-between items-center">
//         <div className="flex items-center">
//           <span className="text-xl font-bold mr-4">MAGIX</span>
//         </div>
//         <div className="relative">
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={toggleDropdown}
//           >
//             <span className="mr-4">Andrew New</span>
//             <div className="w-8 h-8 rounded-full bg-gray-500"></div>
//           </div>
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Dashboard
//               </a>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Employees
//               </a>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Jobs
//               </a>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Candidates
//               </a>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Leaves
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//  {/* Content */}
// <div className="flex-grow p-6 bg-slate-200 ">
//   <h1 className="text-3xl mb-8 text-black-">Good Morning</h1>
//   <div className="flex flex-wrap justify-between">
//     <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full md:w-1/5 md:mr-4 relative">
//       <div className="absolute -top-4 left-4">
//         <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
//           <span className="text-white font-bold text-lg">200</span>
//         </div>
//       </div>
//       <p className="text-sm text-gray-400 mb-2 mt-6">Total Employees</p>
//       <p className="text-xl font-normal">
//         <span className="font-bold text-2xl">200</span>/200
//       </p>
//     </div>
//     <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full md:w-1/5 md:mr-4 relative">
//       <div className="absolute -top-4 left-4">
//         <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
//           <span className="text-white font-bold text-lg">12</span>
//         </div>
//       </div>
//       <p className="text-sm text-gray-400 mb-2 mt-6">On Leave</p>
//       <p className="text-xl font-normal">
//         <span className="font-bold text-2xl">12</span>/200
//       </p>
//     </div>
//     <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full md:w-1/5 md:mr-4 relative">
//       <div className="absolute -top-4 left-4">
//         <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
//           <span className="text-white font-bold text-lg">15</span>
//         </div>
//       </div>
//       <p className="text-sm text-gray-400 mb-2 mt-6">New Joinee</p>
//       <p className="text-xl font-normal">
//         <span className="font-bold text-2xl">15</span>/200
//       </p>
//     </div>
//     <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full md:w-1/5 md:mr-4 relative">
//       <div className="absolute -top-4 left-4">
//         <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
//           <span className="text-white font-bold text-lg">80%</span>
//         </div>
//       </div>
//       <p className="text-sm text-gray-400 mb-2 mt-6">Happiness Rate</p>
//       <p className="text-xl font-bold">80%</p>
//     </div>
//     <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full md:w-1/5 relative">
//       <div className="absolute -top-4 left-4">
//         <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
//           <span className="text-white font-bold text-lg">77%</span>
//         </div>
//       </div>
//       <div className="radial-progress text-purple-600" style={{ '--value': 77 }}>
//         77%
//       </div>
//       <p className="text-sm text-gray-400 mt-2">23% Attrition Rate</p>
//     </div>
//   </div>
//   <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mt-6">
//     Add Employee
//   </button>
// </div>
// </div>
//   );
// };

// export default Dashboard;
