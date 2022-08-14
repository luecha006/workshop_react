import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Project from '../pages/Project';
import Post from '../pages/Post';
import About from '../pages/About';

export default function index() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Project />} />
                <Route exact path="/posts" element={<Post />} />
            </Routes>
        </div>
    )
}
