import React from "react";
import GroupButtonItem from "./GroupButtonItem";
import "./styles/GroupButton.css";
const GroupButton = ({children}) => {
  return (
    <>
      <div class="btn-group">
        {children}
      </div>
    </>
  );
};

export default GroupButton;