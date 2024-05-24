<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories/Categories";
import Blogs from "./Blogs/Blogs";
import Sources from "./Sources/Sources";
import Dashboard from "./Dashboard/Dashboard";
import { FaqsRoutes } from "./Faqs";
import { ServicesRoutes } from "./Services";

const Main = () => {
  return (
    <div className="main-container w-[85%] absolute top-[100px] p-[10px] right-0">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/faqs/*" element={<FaqsRoutes />} />
        <Route path="/services/*" element={<ServicesRoutes />} />
      </Routes>
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './Categories/Categories';
import Blogs from './Blogs/Blogs';
import Sources from './Sources/Sources';
import Dashboard from './Dashboard/Dashboard';
import News from './News/News';

const Main = () => {
  return (
    <div className='main-container w-[85%] absolute top-[100px] p-[10px] right-0'>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/news" element={<News />} />
        </Routes>
>>>>>>> 9c6c20e80f9291bdd9c3347cffa96bccf97ad18c
    </div>
  );
};

export default Main;
