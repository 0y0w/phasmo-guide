import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Wraith() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Wraith');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
