
import './App.css';
import Header from './Header';
import { ghostsData } from './Data.jsx'
import SoundPlayer from './audioPlayer.jsx';

export default function GhostSpeed() {
  return (
    <div className="container">
      <Header activePage=''/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">鬼魂移速一覽<udt>Update: 2026.08.01</udt></h1>
        </div>
        <div className='speed-area'>
          <table className='speed-table'>
            <thead>
              <tr>
                <th>鬼魂 Ghost</th>
                <th>{`慢速 < 1.7 m/s`}</th>
                <th>{`正常 = 1.7 m/s`}</th>
                <th>{`快速 > 1.7 m/s`}</th>
              </tr>
            </thead>
            <tbody>
              {ghostsData.map(ghost =>(
                <tr>
                  <td>{ghost.name} {ghost.id}</td>
                  <td className='speed-slow'>{ghost.basicSpeed?.[0] && <SoundPlayer src={`${import.meta.env.BASE_URL}audio/${ghost.basicSpeed[0]}.mp3`} />}{ghost.basicSpeed[0]}</td>
                  <td className='speed-normal'>{ghost.basicSpeed?.[1] && <SoundPlayer src={`${import.meta.env.BASE_URL}audio/${ghost.basicSpeed[1]}.mp3`} />}{ghost.basicSpeed[1]}</td>
                  <td className='speed-fast'>{ghost.basicSpeed?.[2] && <SoundPlayer src={`${import.meta.env.BASE_URL}audio/${ghost.basicSpeed[2]}.mp3`} />}{ghost.basicSpeed[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}