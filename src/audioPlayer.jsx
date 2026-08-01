let currentAudio = null;

export default function SoundPlayer({ src }) {
  const playAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(src);

    currentAudio.onended = () => {
      currentAudio = null;
    };

    currentAudio.play();
  };

  return (
    <button className='play-btn' onClick={playAudio}>
      &#9654;
    </button>
  );
}