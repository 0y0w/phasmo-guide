import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'    
import Items from './Items.jsx'
import Maps from './Maps.jsx'
import Challenges from './Challenges.jsx'
import Tutorial from './Tutorial.jsx'
import GhostSpeed from './GhostSpeed.jsx'
import GhostThreshold from './GhostThreshold.jsx'
import Achievement from './Achievement.jsx'

import Ghost from './ghosts/Ghost.jsx'   
import MapDetail from './MapDetail.jsx'
import ItemDetail from './ItemDetail.jsx'

import './App.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/phasmo-guide'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/items" element={<Items />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/ghostSpeed" element={<GhostSpeed />} />
        <Route path="/ghostThreshold" element={<GhostThreshold />} />

        <Route path="/achievement" element={<Achievement />} />

        <Route path="/ghosts/:ghostId" element={<Ghost />} />
        <Route path="/maps/:mapId" element={<MapDetail />} />
        <Route path='/items/:itemId' element={<ItemDetail />} />

        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)