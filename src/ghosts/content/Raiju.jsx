import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Raiju() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Raiju');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
