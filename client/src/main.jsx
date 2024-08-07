import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import Profile from "./Pages/Profile.jsx"
import Dashboard from "./Pages/Dashboard.jsx";
import Contact from "./Pages/contact.jsx";
import Home from "./Pages/Home.jsx"
import Matches from "./Pages/Matches.jsx"
import Venues from "./Pages/Venues.jsx"
import Photos from "./Pages/Photos.jsx"
import Videos from "./Pages/Videos.jsx"
import Teams from "./Pages/Team.jsx"
import Logout from "./Pages/Logout.jsx"
import Tables from "./Pages/Tables.jsx"
import Player from "./Pages/Player.jsx"
import TeamForm from "./Pages/TeamForm.jsx"
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='logout' element={<Logout />} />
      <Route path='register' element={<Registration />} />
      <Route path='profile' element={<Profile />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='contact' element={<Contact />} />
      <Route path='matches' element={<Matches />} />
      <Route path='venues' element={<Venues />} />
      <Route path='photos' element={<Photos />} />
      <Route path='videos' element={<Videos />} />
      <Route path='teams' element={<Teams />} />
      <Route path='tables' element={<Tables />} />
      <Route path='player' element={<Player />} />
      <Route path='tform' element={<TeamForm />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
