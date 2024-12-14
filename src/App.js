import React from 'react'
import Signup from "./Components/Signup";
import Login from './Components/Login';
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import List from './Components/List/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />

      </Routes>
    </>
  )
}

export default App