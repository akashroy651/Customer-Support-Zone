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














