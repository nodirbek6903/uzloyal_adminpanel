import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './Categories/Categories';
import Blogs from './Blogs/Blogs';
import Sources from './Sources/Sources';
import Dashboard from './Dashboard/Dashboard';

const Main = () => {
  return (
    <div className='main-container w-[85%] absolute top-[100px] p-[10px] right-0'>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sources" element={<Sources />} />
        </Routes>
    </div>
  )
}

export default Main