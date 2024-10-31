import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from "./pages/Login/Register";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import Vouchers from "./pages/Vouchers/Vouchers";
import RegisterPage from "./pages/RegestirPage/RegisterPage";
import RemoteClass from "./pages/RemoteClass/RemoteClass";
import Signatures from "./pages/Signature/Signature";
import Learning from "./pages/Learning/Learning";
import FigmaUi from "./pages/FigmaUi/FigmaUi";
import CoursesSignatures from "./pages/Course’s Signatures/CoursesSignatures";
import SignPage from "./pages/SignPage/SignPage";

// import Maseggs from './pages/Maseggs';

const router = createBrowserRouter([

{ path: '/', element: <RegisterPage /> },
{ path: '/Register', element: <Register /> },
{ path: '/Home', element: <Home /> },
{ path: '/Features', element: <Features/> },
{ path: '/Vouchers', element: <Vouchers/> },
{ path: '/RemoteClass', element: <RemoteClass/> },
{ path: '/Signatures', element: <Signatures/> },  
{ path: '/Learning', element: <Learning/> },  
{ path: '/FigmaUi', element: <FigmaUi/> },  
{ path: '/CoursesSignatures', element: <CoursesSignatures/> },  
{ path: '/SignPage', element: <SignPage/> },  



]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

