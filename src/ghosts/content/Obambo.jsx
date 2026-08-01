import { Link } from 'react-router-dom';

import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Obambo() {
  const Data = ghostsData.find((ghost) => ghost.id === 'Obambo');

  return (
    <div>
      內容待新增...
      <br />
      <Link to={`https://phasmophobia.fandom.com/zh/wiki/${Data.name}`} style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
            前往官方維基
      </Link>
    </div>
  );
}
