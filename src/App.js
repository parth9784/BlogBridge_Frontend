import React,{useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HF_Layout from './HF_Layout';
import S_Layout from './S_Layout';
import LoginPage from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import Myblogs from './myblogs';
function App() {

  return (
        <Routes>
      <Route path="/" element={<HF_Layout> <Homepage/></HF_Layout >}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/myblogs" element={<HF_Layout><Myblogs/></HF_Layout>}></Route>
      {/* <Route path="/" element={<HF_Layout><Myblogs/></HF_Layout>}></Route> */}
      </Routes>
  );
}

export default App;