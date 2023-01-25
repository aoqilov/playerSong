import React, { useRef, useState } from "react";
import Album from "./components/bilboard/Album";
import Table from "./components/mostpopular/Table";
import Navbar from "./components/navbar/Navbar";
import PlayMusic from "./components/playing/PlayMusic";

// data
import dataa from "./api/albumData";

const App = () => {
  const [songs, setSongs] = useState(dataa);
  const [nowSong, setNowSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  // for playMusic
  const audioRef = useRef(null);

  const [songTime, setSongTime] = useState({
    curentTime: 0,
    durationTime: null,
  });
  const timeUpdateHandler = (e) => {
    const start = e.target.currentTime;
    const end = e.target.duration;
    setSongTime({
      ...songTime,
      curentTime: start,
      durationTime: end,
    });
  };

  return (
    <div>
      <nav className="navbar-main">
        <Navbar />
      </nav>
      <div className="three">
        <div className="albom-main">
          <Album songs={songs} />
        </div>
        <div className="table-main">
          <Table
            songs={songs}
            setNowSong={setNowSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        </div>
        <div className="play">
          <PlayMusic
            nowSong={nowSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            setSongTime={setSongTime}
            songTime={songTime}
            timeUpdateHandler={timeUpdateHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
