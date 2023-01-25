import React, { useState } from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const PlayMusic = ({
  nowSong,
  timeUpdateHandler,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongTime,
  songTime,
}) => {
  const playSongHandeler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  // for time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const rangeInput = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({
      ...songTime,
      currentTime: e.target.value,
    });
  };

  ////////////////////////////////////////////////////////////
  return (
    <div className="play-m">
      <h2>now playing</h2>
      <div className="box">
        <div className="img-box">
          <img src={nowSong.img} alt="ads" />
          <h4>{nowSong.name}</h4>
          <h6>{nowSong.author}</h6>
          <audio
            src={nowSong.audio}
            ref={audioRef}
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
          />
          <div className="range">
            <input
              type="range"
              min="0"
              max={songTime.durationTime}
              value={songTime.curentTime}
              onChange={rangeInput}
            />
            <div className="time-music">
              <p>{getTime(songTime.curentTime)}</p>
              <p>{getTime(songTime.durationTime)}</p>
            </div>
          </div>
        </div>
        <div className="icons">
          <div>
            <SkipPreviousIcon className="icon" />
          </div>
          <div onClick={playSongHandeler} className="circle">
            {isPlaying ? (
              <PauseIcon className="icon" />
            ) : (
              <PlayArrowIcon className="icon" />
            )}
          </div>
          <div>
            <SkipNextIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayMusic;
