import React from "react";
import "./styles/GroupButton.css";
const GroupButton = () => {
  return (
    <>
      <div class="btn-group">
        <button class="btn btn-primary">+</button>
        <button class="btn btn-primary">-</button>
        <button class="btn btn-primary">+5</button>
      </div>
    </>
  );
};

export default GroupButton;