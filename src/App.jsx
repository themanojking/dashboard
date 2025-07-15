import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import Customer from "./Pages/Customer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="grow ml-16 md:ml-64 h-screen bg-gray-100 text-gray-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/orders" element={<Order />}></Route>
              <Route path="/products" element={<Product />}></Route>
              <Route path="/customers" element={<Customer />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
