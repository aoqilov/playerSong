import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const InTable = ({ song, idx, setNowSong, audioRef, isPlaying }) => {
  const openMusic = () => {
    setNowSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div>
      <li onClick={openMusic}>
        <p className="num">{idx + 1}</p>
        <img src={song.img} alt={song.name} />
        <PlayArrowIcon className="icon" />

        <h5>{song.name}</h5>
        <FavoriteBorderIcon className="heart" />
      </li>
    </div>
  );
};

export default InTable;
