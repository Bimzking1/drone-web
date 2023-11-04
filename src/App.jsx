import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/organization" element={<HomeOrganization />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
