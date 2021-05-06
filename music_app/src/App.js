import { useState, useEffect } from "react";
import Player from "./components/Player/Player";
import Navbarr from "./components/Player/Navbar";
import Footer from "./components/Player/Footer";
import LoginButton from "./components/Player/LoginButton";
import LogoutButton from "./components/Player/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  const [songs] = useState([
    {
      title: "Old Town Road",
      artist: "Lil Nas X (feat. Billy Ray Cyrus)",
      img_src: "./images/song-1.png",
      src: "./music/oldtown.mp3",
    },
    {
      title: "Everything at once",
      artist: "Lenka",
      img_src: "./images/lenka.jpg",
      src: "./music/everythingAtOnce.mp3",
    },
    {
      title: "Chalta Rahe",
      artist: "Ankit Tiwari",
      img_src: "./images/hero.jpg",
      src: "./music/chalta_rahe.mp3",
    },
    {
      title: "Lily",
      artist: "Alan Walker",
      img_src: "./images/lily.jpg",
      src: "./music/lily.mp3",
    },
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
  if (isLoading) return <h3>Loading ...</h3>;
  return (
    <div className="App">
      <Navbarr />

      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

      <Footer />
    </div>
  );
}

export default App;
