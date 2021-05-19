import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`Options ${active && "sidebarOption--active"}`}>
      <div className="Options">
        <Icon />
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SidebarOption;
