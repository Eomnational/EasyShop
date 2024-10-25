import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/core/Home';
import Shop from './components/core/Shop';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;



