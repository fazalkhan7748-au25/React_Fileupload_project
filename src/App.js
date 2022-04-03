import React, { Fragment } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home/home';
import Login from './pages/login/login'
import Register from './pages/register/register'
import Header from './component/Header/header';
import Fileupload2 from './component/fileupload/fileupload2';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import EmpDetails from './pages/product/product';


import './App.css';

function App() {
  return (
    <Fragment>
      
     
      <BrowserRouter>
      <Header></Header>
        <Routes>
        
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/loggedin' element={<Fileupload2></Fileupload2>}></Route>
          <Route path='/filedata' element={<EmpDetails></EmpDetails>}></Route>

        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
