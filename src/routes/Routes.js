import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/auth/LoginPage';
import Home from '../pages/HomePage'
function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Login}/>
      <Route path="/home" Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
