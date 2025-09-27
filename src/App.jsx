import React, { Suspense } from 'react';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer/Footer'
import Customer from './components/Customer/Customer'


const fetchCustomer = async () =>{
  const res = await fetch("/customer.json")
  return res.json()
}

function App() {
 const  customerPromise = fetchCustomer()
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <div className='font-semibold text-2xl ml-6'>
        <h1>Customer Tickets</h1>
     </div>
     <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
       <Customer customerPromise={customerPromise}></Customer>
     </Suspense>
    
     <Footer></Footer>
     
      
    </>
  )
}

export default App















//  <div className="card bg-base-100 shadow-sm">
//           <div className="card-body">
//             <div className="flex justify-between">
//               <h2 className="card-title">
//                 {/* title */}
//                 {customer.title}
//               </h2>
//               <div className="flex items-center bg-green-100 text-green-700 font-medium px-3 py-2 rounded-full">
//                 <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
//                     {/* status */}
//                 <span>{customer.status}</span>
//               </div>
//             </div>
//             <p>
//              {/* description */}
//              {customer.description}
//             </p>
//             <div className="flex justify-between">
//               <div className="flex gap-3">
//                 {/* id */}
//                 <span>{customer.id}</span>
//                 <p>{customer.priority}</p>
//               </div>

//               <div className="flex gap-2">
//                 <h5>{customer.customer}</h5>
//                 <FaRegCalendarAlt size={20} color="#666" />
//                 {/* date */}
//                 <span>{customer.date}</span>
//               </div>
//             </div>
//           </div>
          
//         </div>