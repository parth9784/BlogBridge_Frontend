import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HF_Layout from './HF_Layout';
import S_Layout from './S_Layout';
import Homepage from './Homepage';
function App() {
  return (
        <Routes>
      <Route path="/" element={<HF_Layout> <Homepage/> </HF_Layout >}></Route>
      {/* <Route path="/" element={<S_Layout> <Homepage/> </S_Layout >}></Route> */}
      </Routes>
  );
}

export default App;