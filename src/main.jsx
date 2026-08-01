import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'    
import Items from './Items.jsx'
import Maps from './Maps.jsx'
import Challenges from './Challenges.jsx'
import Tutorial from './Tutorial.jsx'
import GhostSpeed from './GhostSpeed.jsx'
import Achievement from './Achievement.jsx'

import Ghost from './ghosts/Ghost.jsx'   
import MapDetail from './MapDetail.jsx'

import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/phasmophobia'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/Challenges" element={<Challenges />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/GhostSpeed" element={<GhostSpeed />} />
        <Route path="/Achievement" element={<Achievement />} />

        <Route path="/ghosts/:ghostId" element={<Ghost />} />
        <Route path="/maps/:mapId" element={<MapDetail />} />

        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)