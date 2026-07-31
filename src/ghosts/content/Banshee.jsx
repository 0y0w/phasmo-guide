import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Banshee() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Banshee');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
