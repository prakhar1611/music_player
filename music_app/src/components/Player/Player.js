import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import { useAuth0 } from "@auth0/auth0-react";

function Player(props) {
  const { user, isAuthenticated } = useAuth0();
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      // console.log(audioEl);
    } else {
      // audioEl.current.stop();
      // console.log(audioEl);
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    isAuthenticated && (
      <div className="c-player">
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioEl}
        ></audio>
        <h4>Playing now</h4>
        <Details song={props.songs[props.currentSongIndex]} />
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
        <p>
          Next up:{" "}
          <span>
            {props.songs[props.nextSongIndex].title} by{" "}
            {props.songs[props.nextSongIndex].artist}
          </span>
        </p>
      </div>
    )
  );
}
export default Player;
