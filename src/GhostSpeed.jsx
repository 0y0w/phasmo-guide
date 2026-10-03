import { useState } from 'react';
import './App.css';
import Header from './Header';
import { ghostsData } from './data.jsx'
import SoundPlayer from './audioPlayer.jsx';
import { Link } from 'react-router-dom';

export default function GhostSpeed() {
  const speedOptions = [
    { label: '100%', value: '1.0' },
    { label: '150%', value: '1.5' },
  ];
  const [speedIndex, setSpeedIndex] = useState(0);
  const toggleSpeed = () => {
    setSpeedIndex((prevIndex) => (prevIndex + 1) % speedOptions.length);
  };
  const currentSpeed = speedOptions[speedIndex];
  return (
    <div className="container">
      <Header activePage=''/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">鬼魂移速一覽
            <button className="speed-toggle-btn active" onClick={toggleSpeed}>切換倍速：{currentSpeed.label}</button>
          <dt>Update: 2026.08.01</dt></h1>
        </div>
        
        
        <div className='speed-area'>
          <table className='speed-table'>
            <tbody>
              <tr>
                <th>鬼魂 Ghost</th>
                <th>{`慢速 < 1.7 m/s`}</th>
                <th>{`正常 = 1.7 m/s`}</th>
                <th>{`快速 > 1.7 m/s`}</th>
              </tr>
              {ghostsData.map(ghost =>(
                <tr key={ghost.id}>
                  <td><Link to={`/ghosts/${ghost.id}`} className='speed-link' >{ghost.name}</ Link></td>
                  <td className='speed-slow'>{ghost.basicSpeed?.[0] && <SoundPlayer src={`${import.meta.env.BASE_URL}audio/${currentSpeed.value}/${ghost.basicSpeed[0]}.mp3`} />}{ghost.basicSpeed[0]}</td>
                  <td className='speed-normal'>{ghost.basicSpeed?.[1] && <SoundPlayer src={`${import.meta.env.BASE_URL}audio/${currentSpeed.value}/${ghost.basicSpeed[1]}.mp3`} />}{ghost.basicSpeed[1]}</td>
                  <td className='speed-fast'>{ghost.basicSpeed?.[2] && <SoundPlayer src={`${import.meta.env.BASE_URL}audio/${currentSpeed.value}/${ghost.basicSpeed[2]}.mp3`} />}{ghost.basicSpeed[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}