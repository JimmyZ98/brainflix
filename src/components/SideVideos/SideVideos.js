import "./SideVideos.scss";
import React from "react";

function SideVideos() {
  return (
    <section className="side">
      <h2 className="side__title">NEXT VIDEOS</h2>
      <div className="side__list">
        <div className="side__video">
          <div className="side__video--thumbnail"></div>
          <div className="side__video--right">
            <p className="side__title"></p>
            <p className="side__author"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideVideos;
