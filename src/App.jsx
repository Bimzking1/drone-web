import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./layout/Layout";
import './index.css'

function App() {
  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
