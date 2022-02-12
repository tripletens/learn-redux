
import './App.css';
import Navbar from './const/Navbar';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Navbar/>
        <div className='wrap'>
          <p className='center-text text-center'>Welcome to Learning Redux</p>
        </div>
      </div>
    </>
  );
}

export default App;
