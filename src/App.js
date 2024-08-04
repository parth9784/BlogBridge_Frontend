import React,{useState} from 'react';
import { Routes, Route,} from 'react-router-dom';
import HF_Layout from './HF_Layout';
import LoginPage from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import Myblogs from './myblogs';
import Blogpage from './Blogpage';
import Loading from './Loading';
import CreateBlog from './createblog';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myblogpage from './myblogpage';
import Nodatafound from './Nodatafound';
import EditBlog from './Editblog';
import About from './About';
import ContactPage from './Contact';
import Forgotpassword from './Forgotpassword';
import Otppage from './otppage';
import ChangePassword from './Changepassword';
import CommentSection from './comments';
import Pnf from './Pnf';

function App() {
  const [query,setquery]=useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  // console.log("app.js me status:",isLoggedIn)
  const handleLogin=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem("userid")
    localStorage.removeItem("username")
    setIsLoggedIn(false);
  };
  // console.log(query);
  return (

    <div className=''>
     <Routes>
      <Route path="/" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} query={query} setquery={setquery}> <Homepage isloggedin={isLoggedIn} query={query}/></HF_Layout >}></Route>
      <Route path="/login" element={<LoginPage handleLogin={handleLogin}/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/myblogs" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Myblogs/></HF_Layout>}></Route>
      <Route path="/blog/:id" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Blogpage/></HF_Layout>}></Route>
      <Route path="/loading" element={<Loading/>}></Route>
      <Route path="/Nodatafound" element={<Nodatafound/>}></Route>
      <Route path="/createblog" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}> <CreateBlog/></HF_Layout>}></Route>
      <Route path="/myblog/:id" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Myblogpage/></HF_Layout>}></Route>
      <Route path="/editblog/:id" element={<HF_Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}><EditBlog/></HF_Layout>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/forgot" element={<Forgotpassword/>}></Route>
      <Route path="/otppage" element={<Otppage/>}></Route>
      <Route path="/changepassword" element={<ChangePassword/>}></Route>
      <Route path="/comments" element={<CommentSection/>}></Route>
      <Route path="/comments" element={<CommentSection/>}></Route>
      <Route path="*" element={<Pnf/>} ></Route>
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
    </div>
  );
}

export default App;