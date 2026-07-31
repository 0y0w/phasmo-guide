import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Myling() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Myling');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
