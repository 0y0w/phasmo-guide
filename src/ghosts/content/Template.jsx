import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function GHOST() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'GHOST');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
