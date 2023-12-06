import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Navigation from './Navigation/navigation';
import Home from './Homepage/home';
import Browse from './Browse page/browse';
import Create from './Create page/create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Navigation/>
            <Routes>
                <Route path="/"
                    element={<Home/>}></Route>
                <Route path="/home"
                    element={<Home/>}></Route>
                <Route path="/create"
                    element={<Create/>}></Route>
                <Route path="/browse"
                    element={<Browse/>}></Route>
                <Route path="/learn"
                    element={<></>}></Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
