import "./SideVideos.scss";
import React from "react";

function SideVideos({ videos, selectedVideo, handleClick }) {
  return (
    <section className="side">
      <h2 className="side__title">NEXT VIDEOS</h2>
      <div className="side__list">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <div
                key={video.id}
                onClick={() => {
                  handleClick(video.id);
                }}
                className="side__video"
              >
                <img
                  className="side__thumbnail"
                  src={video.image}
                  alt={video.title}
                />
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
