import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>N S Mahesh</h2>
        <h4>maheshnaik122@gmail.com</h4>
      </div>
      <div className="siderbar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1234</p>
        </div>
        <div className="sidebar__stat"></div>
        <p>Views on post</p>
        <p className="sidebar__statNumber">2458</p>
        </div>
      </div>
      
  );
}

export default Sidebar;
