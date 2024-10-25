import React from 'react';
import { Routes as RouterRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/core/Home';
import Shop from './components/core/Shop';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </RouterRoutes>
        </BrowserRouter>
    );
};

export default RoutesComponent;




