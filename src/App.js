import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import StudentsProjects from './components/StudentsProjects.jsx';
import Login from './components/Login.jsx';



export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/RegisterForm" element={<RegisterForm />} />
      <Route path="/StudentsProjects" element={<StudentsProjects/>} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}