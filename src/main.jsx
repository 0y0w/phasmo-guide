import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import App from './App.jsx'
import EvFilter from './EvFilter.jsx'
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

import TOC from './TOC.jsx'

import './App.css'

// 每次路由跳轉時回到頁面最上方；帶 hash 的錨點跳轉（如 /#aswang）不干擾
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // 錨點跳轉由各頁自行 scrollIntoView
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TOC />
    <BrowserRouter basename='/phasmo-guide'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/evfilter" element={<EvFilter />} />
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