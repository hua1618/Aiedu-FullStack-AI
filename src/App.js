import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import StudentsProjects from './components/StudentsProjects';
import Login from './components/Login';


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