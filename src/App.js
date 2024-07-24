import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HF_Layout from './HF_Layout';
import S_Layout from './S_Layout';
import LoginPage from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import Blogcard from "./Blogcard";
function App() {
  return (
        <Routes>
      <Route path="/" element={<HF_Layout> <Homepage/> </HF_Layout >}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/blogcard" element={<Blogcard/>}></Route>
      </Routes>
  );
}

export default App;