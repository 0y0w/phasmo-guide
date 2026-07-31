import '../../App.css'
import '../Ghost.css'
import { ghostsData } from '../../data';

export default function Spirit() {
  const ghostData = ghostsData.find((ghost) => ghost.id === 'Spirit');

  return (
    <div>
      {ghostData?.name} 
      <br />
      內容待新增...
    </div>
  );
}
