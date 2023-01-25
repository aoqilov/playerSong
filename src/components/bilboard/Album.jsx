import React from "react";
import alboms from "../../api/albumData";

const Album = ({ songs }) => {
  return (
    <div className="bill__board">
      <h2>top album</h2>
      <div className="all-albun">
        {songs.map((item, idx) => {
          return (
            <div className="card">
              <img src={item.img} alt="img" />
              <div className="card-info">
                <h3>{item.name}</h3>
                <h5>{item.author}</h5>
                <p>{songs.length}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Album;
