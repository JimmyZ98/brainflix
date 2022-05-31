import "./SingleVideo.scss";
import React from "react";

function SingleVideo({ id, image, title, channel, handleClick }) {
  return (
    <div
      key={id}
      onClick={() => {
        handleClick(id);
      }}
      className="single-video__video"
    >
      <img className="single-video__thumbnail" src={image} alt={title} />
      <div className="single-video__video--right">
        <div className="single-video__title">{title}</div>
        <div className="single-video__channel">{channel}</div>
      </div>
    </div>
  );
}

export default SingleVideo;
