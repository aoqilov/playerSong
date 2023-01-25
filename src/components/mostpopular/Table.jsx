import React from "react";

import InTable from "./inTable";

const Table = ({ songs, setNowSong, audioRef, isPlaying }) => {
  return (
    <div className="mostpop">
      <h2>
        music table
        <p>{songs.length}</p>
      </h2>

      <ul>
        {songs.map((song, idx) => {
          return (
            <InTable
              song={song}
              idx={idx}
              setNowSong={setNowSong}
              key={idx}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Table;
