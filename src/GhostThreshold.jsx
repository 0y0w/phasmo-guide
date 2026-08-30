
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { ghostsData } from './data.jsx'

export default function GhostThreshold() {
  return (
    <div className="container">
      <Header activePage=''/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">獵殺閾值一覽<dt>Update: 2026.08.02</dt></h1>
        </div>
        <div className='speed-area'>
          <table className='speed-table'>
            <tbody>
              <tr>
                <th>鬼魂 Ghost</th>
                <th>{`晚獵 < 50 %`}</th>
                <th>{`正常 = 50 %`}</th>
                <th>{`早獵 > 50 %`}</th>
              </tr>
              {ghostsData.map(ghost =>(
                <tr key={ghost.id}>
                  <td><Link to={`/ghosts/${ghost.id}`} className='speed-link'>{ghost.name}</Link></td>
                  <td className='speed-slow'>{ghost.threshold[0]}</td>
                  <td className='speed-normal'>{ghost.threshold[1]}</td>
                  <td className='speed-fast'>{ghost.threshold[2]}{ghost.threshold?.[3] && ghost.threshold[3]}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className='speed-fast'>*能力無視理智獵殺</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}