import React from "react";

import "./header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
let Header = (props) => {
  return (
    <div className="header">
      {/* will have user icon */}
      <div className="header-left">
        <Avatar
          className="header-avatar"
          alt={props.user?.name}
          src={props.user?.userimage}
        />
        <AccessTimeIcon />
      </div>

      {/* will have the search bar */}
      <div className="header-search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>

      {/* will have help btn */}
      <div className="header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
