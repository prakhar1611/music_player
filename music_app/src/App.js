import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Old Town Road",
      artist: "Lil Nas X (feat. Billy Ray Cyrus)",
      img_src: "./images/song-1.png",
      src: "./music/oldtown.mp3"
    },
    {
      title: "Everything at once",
      artist: "Lenka",
      img_src: "./images/lenka.jpg",
      src: "./music/everythingAtOnce.mp3"
    },
    {
      title: "Chalta Rahe",
      artist: "Ankit Tiwari",
      img_src: "./images/hero.jpg",
      src: "./music/chalta_rahe.mp3"
    },
    {
      title: "Lily",
      artist: "Alan Walker",
      img_src: "./images/lily.jpg",
      src: "./music/lily.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
