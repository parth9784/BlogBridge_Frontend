import React,{useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HF_Layout from './HF_Layout';
import S_Layout from './S_Layout';
import LoginPage from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import Myblogs from './myblogs';
import Blogpage from './Blogpage';
import Loading from './Loading';
function App() {

  return (
        <Routes>
      <Route path="/" element={<HF_Layout> <Homepage/></HF_Layout >}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/myblogs" element={<HF_Layout><Myblogs/></HF_Layout>}></Route>
      <Route path="/blog/:id" element={<HF_Layout><Blogpage/></HF_Layout>}></Route>
      <Route path="/loading" element={<Loading/>}></Route>
      </Routes>
  );
}

export default App;