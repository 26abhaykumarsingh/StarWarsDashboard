import React from "react";
import "./SidebarItem.css";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";

function SidebarItem({ title }) {
  return (
    <div className="SidebarItem">
      <div className="sidebarItemIcon">
        <FolderRoundedIcon></FolderRoundedIcon>
      </div>
      <div className="rightSection">
        <div className="sidebarItemTitle">{title}</div>
        <div className="sidebarItemRightArrow">
          <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
