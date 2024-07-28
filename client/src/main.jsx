import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import Profile from "./Pages/Profile.jsx"
import Dashboard from "./Pages/Dashboard.jsx";
import Contact from "./Pages/contact.jsx";
import Home from "./Pages/Home.jsx"
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Registration />} />
      <Route path='profile' element={<Profile />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
