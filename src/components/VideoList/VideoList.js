import "./VideoList.scss";
import React from "react";
import SingleVideo from "../Comments/SinlgeVideo/SingleVideo";

function VideoList({ videos, selectedVideo, handleClick }) {
  return (
    <section className="video-list">
      <h2 className="video-list__title">NEXT VIDEOS</h2>
      <div className="video-list__list">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <SingleVideo
                key={video.id}
                id={video.id}
                image={video.image}
                title={video.title}
                channel={video.channel}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </section>
  );
}

export default VideoList;
