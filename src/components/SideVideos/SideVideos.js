import "./SideVideos.scss";
import React from "react";

function SideVideos(props) {
  return (
    <section className="side">
      <h2 className="side__title">NEXT VIDEOS</h2>
      <div className="side__list">
        {props.videos.map((video) => {
          return (
            <div
              key={video.id}
              onClick={() => {
                props.handleClick(video.id);
              }}
              className="side__video"
            >
              <img className="side__thumbnail" src={video.image} alt="" />
              <div className="side__video--right">
                <div className="side__title">{video.title}</div>
                <div className="side__author">{video.channel}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SideVideos;
