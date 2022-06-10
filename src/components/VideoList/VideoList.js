import "./VideoList.scss";
import React from "react";
import SingleVideo from "../SinlgeVideo/SingleVideo";

function VideoList({ videos, selectedVideo }) {
  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
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
              />
            );
          })}
      </div>
    </section>
  );
}

export default VideoList;
