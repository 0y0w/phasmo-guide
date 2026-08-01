import { Link } from 'react-router-dom';

import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Revenant() {
  const Data = ghostsData.find((ghost) => ghost.id === 'Revenant');

  return (
    <div>
      內容待新增...
      <br />
      <Link to={`https://phasmophobia.fandom.com/zh/wiki/${Data.name}`} target='_blank' rel='noopener noreferrer' className='link'>
            前往官方維基
      </Link>
    </div>
  );
}
