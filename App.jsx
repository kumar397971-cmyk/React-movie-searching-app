import React from 'react';
import { useState } from 'react'
import './index.css'
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import { Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider, Link } from "react-router-dom";



function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
  ]);

  return (

    <RouterProvider router={router} />

    /*<>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
    </>*/
  )
}

export default App