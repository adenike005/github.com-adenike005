import React from 'react';
import './App.css';
import Home from "./Routes/Home"
import Sign from "./Routes/Sign"
import Login from "./Routes/Login"

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
     </Routes>
    </>
  );
}

export default App;
