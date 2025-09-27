

import React, { use} from "react";
import { FaRegCalendarAlt } from "react-icons/fa";





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
          <div className="card bg-base-100 shadow-sm">
          
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

