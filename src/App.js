import React,{useEffect,useState} from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const navigate = useNavigate();
  // console.log("app.js me status:",isLoggedIn)
  const handleLogin=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
        <Routes>
      <Route path="/" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}> <Homepage isloggedin={isLoggedIn}/></HF_Layout >}></Route>
      <Route path="/login" element={<LoginPage handleLogin={handleLogin}/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/myblogs" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Myblogs/></HF_Layout>}></Route>
      <Route path="/blog/:id" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Blogpage/></HF_Layout>}></Route>
      <Route path="/loading" element={<Loading/>}></Route>
      </Routes>
  );
}

export default App;