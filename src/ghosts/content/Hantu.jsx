import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Hantu() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Hantu');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
