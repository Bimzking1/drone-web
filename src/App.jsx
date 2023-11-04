import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./layout/Layout";
import './index.css'

function App() {
  return (
    <div className='bg-lime-500 w-full'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/organization" element={<HomeOrganization />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
