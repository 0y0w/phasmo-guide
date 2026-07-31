import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function TheTwins() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'TheTwins');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
