// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Login from './Components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Dashboard from './Components/Dashboard/Dashboard';
import Calender from './Components/Dashboard/Calenderbox';
import Add from './Components/Dashboard/Add';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login  />}>
          </Route>
          <Route path="/" element={<Dashboard />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/calender" element={<Calender/>}>
          </Route>
          
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
