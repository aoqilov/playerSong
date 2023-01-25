import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import UpdateIcon from "@mui/icons-material/Update";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="user">
          <div className="user_img">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="user_info">
            <h3>user name</h3>
            <h5>email@gmai.com</h5>
          </div>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>
            <HomeIcon className="icon" />
            home
          </li>
          <li>
            <AppsIcon className="icon" />
            browse
          </li>
          <li>
            <LibraryBooksIcon className="icon" />
            album
          </li>
          <li>
            <PersonIcon className="icon" />
            artist
          </li>
          <li>
            <VideoSettingsIcon className="icon" />
            videos
          </li>
        </ul>
        <h3>MY MUSIC</h3>
        <ul>
          <li>
            <UpdateIcon className="icon" />
            recently played
          </li>
          <li>
            <LocalOfferIcon className="icon" />
            local files
          </li>
        </ul>
      </div>
      <div className="bottom">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sidebar;
