'use client';
import React, { use } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

// ---------------- Task Status Panel ----------------
const TaskStatus = () => {
  return (
    <div className="card bg-white shadow-sm p-4 sm:p-6 rounded">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Task Status</h3>
      <p className="text-sm text-gray-500 mb-4">
        Select a ticket to add to Task Status
      </p>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h4 className="text-lg font-medium text-gray-700 mb-2">Resolved Task</h4>
        <p className="text-gray-500">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

// ---------------- Customer Component ----------------
const Customer = ({ customerPromise }) => {
  const customerData = use(customerPromise);

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-20 px-2 sm:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Customer Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className="card bg-white shadow-sm p-4 rounded hover:shadow-md cursor-pointer transition"
            >
              <div className="card-body">
                <div className="flex justify-between mb-2">
                  <h2 className="card-title font-semibold text-gray-800">{customer.title}</h2>
                  <div className="flex items-center bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
                    <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                    {customer.status}
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{customer.description}</p>

                <div className="flex justify-between text-gray-600 text-sm">
                  <div className="flex gap-3">
                    <span>{customer.id}</span>
                    <span>{customer.priority}</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span>{customer.customer}</span>
                    <FaRegCalendarAlt size={18} color="#666" />
                    <span>{customer.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Task Status Panel */}
        <div className="lg:col-span-1">
          <TaskStatus />
        </div>
      </div>
    </div>
  );
};

export default Customer;
