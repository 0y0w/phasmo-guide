import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Mare() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Mare');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
