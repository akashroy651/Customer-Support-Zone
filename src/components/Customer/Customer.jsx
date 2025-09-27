"use client"; // The 'use' hook requires this to be a Client Component

import React, { use, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";




// Task Status Panel - ছবির ডানদিকের অংশের জন্য একটি ডামি কম্পোনেন্ট
const TaskStatus = () => {

    


  return (
    <div className="card bg-white shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Task Status</h3>
      <p className="text-sm text-gray-500 mb-6">
        Select a ticket to add to Task Status
      </p>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h4 className="text-lg font-medium text-gray-700 mb-2">
          Resolved Task
        </h4>
        <p className="text-gray-500">No resolved tasks yet.</p>
        {/* আপনি এখানে আপনার Resolved Tasks এর লজিক যোগ করতে পারেন */}
      </div>
    </div>
  );
};

const Customer = ({ customerPromise }) => {

  const customerData = use(customerPromise);
  console.log(customerData);



  return (
    <div className="w-[1440px] mb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {customerData.map((customer) => (
          <div className="card bg-base-100 shadow-sm"
           onClick={() => handleCardClick(customer)}>
          
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                  {/* title */}
                  {customer.title}
                </h2>
                <div className="flex items-center bg-green-100 text-green-700 font-medium px-3 py-2 rounded-full">
                  <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                  {/* status */}
                  <span>{customer.status}</span>
                </div>
              </div>
              <p>
                {/* description */}
                {customer.description}
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  {/* id */}
                  <span>{customer.id}</span>
                  <p>{customer.priority}</p>
                </div>

                <div className="flex gap-2">
                  <h5>{customer.customer}</h5>
                  <FaRegCalendarAlt size={20} color="#666" />
                  {/* date */}
                  <span>{customer.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-1">
        <TaskStatus />
      </div>
    </div>
  );
};

export default Customer;

// 'use client';
// import React, { useState } from "react";
// import { FaRegCalendarAlt } from "react-icons/fa";

// // ---------------- TaskStatus Panel ----------------
// const TaskStatus = ({ tasks }) => {
//   return (
//     <div className="card bg-white shadow-sm p-6">
//       <h3 className="text-xl font-semibold mb-4 text-gray-800">Task Status</h3>

//       {tasks.length === 0 && (
//         <p className="text-sm text-gray-500 mb-6">
//           Select a ticket to add to Task Status
//         </p>
//       )}

//       <div className="space-y-4">
//         {tasks.map((task, index) => (
//           <div key={index} className="card bg-gray-50 shadow-sm p-4 border rounded">
//             <h4 className="text-lg font-medium mb-2">{task.title}</h4>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Complete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ---------------- Customer Component ----------------
// const Customer = ({ customerData }) => {
//   const [inProgress, setInProgress] = useState(0);
//   const [tasks, setTasks] = useState([]);

//   const handleCardClick = (customer) => {
//     // In-Progress counter +1
//     setInProgress(prev => prev + 1);

//     // Add task to Task Status panel
//     setTasks(prev => [...prev, { title: customer.title }]);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4">
//       <div className="w-full max-w-[1440px] mx-auto mb-20">
//         {/* Banner */}
//         <div className="bg-indigo-100 text-indigo-800 p-4 mb-6 rounded">
//           <h2 className="text-lg font-semibold">In-Progress: {inProgress}</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Customer Cards */}
//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//             {customerData.map((customer) => (
//               <div
//                 key={customer.id}
//                 className="card bg-white shadow-md cursor-pointer hover:shadow-lg transition p-4 rounded"
//                 onClick={() => handleCardClick(customer)}
//               >
//                 <div className="flex justify-between mb-2">
//                   <h2 className="card-title font-semibold">{customer.title}</h2>
//                   <div className="flex items-center bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full">
//                     <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
//                     <span>{customer.status}</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-3">{customer.description}</p>
//                 <div className="flex justify-between text-gray-600 text-sm">
//                   <div className="flex gap-3">
//                     <span>{customer.id}</span>
//                     <span>{customer.priority}</span>
//                   </div>
//                   <div className="flex gap-2 items-center">
//                     <span>{customer.customer}</span>
//                     <FaRegCalendarAlt size={18} color="#666" />
//                     <span>{customer.date}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Task Status Panel */}
//           <div className="lg:col-span-1">
//             <TaskStatus tasks={tasks} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Customer;
