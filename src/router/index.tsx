import Dashboard from "../pages/Dashboard.tsx"
import Login from "../pages/Login.tsx"
import Register from "../pages/Register.tsx"
import Gallery from "../pages/Gallery.tsx"

import React from "react"
import { Route, Routes } from "react-router-dom"

export default (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/gallery" element={<Gallery />} />
  </Routes>
)
