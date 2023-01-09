import React from 'react';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from './pages/Login';

import MainPage from './pages/MainPage';
import SideBar from './pages/SideBar';
import Userstate from './Context/UserState';
import ViewFile from './components/MainDasboard/ViewFile/ViewFile';
import EditFile from './components/MainDasboard/EditFile/EditFile';
import Dashboard2 from './components/MainDasboard/Dashboard/DashBoard2';
import SetPageState from './Context/SetPageState';


export default function App() {
  return (
    <div>
    <Userstate>
      <SetPageState>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}>
            </Route>
            <Route path='/dashboard' element={<SideBar/>}/>
            <Route path="/dashboard2" element={<Dashboard2/>}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/filedetail" element={<ViewFile />}/>
            <Route path='/editfile' element={<EditFile/>}/>
          </Routes>
      </BrowserRouter>
      </SetPageState>
      </Userstate>
    </div>
  );
}

