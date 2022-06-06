import { Link } from "react-router-dom";
import "./SingleVideo.scss";
import React from "react";

function SingleVideo({ id, image, title, channel }) {
  return (
    <Link to={"/video/" + id} key={id} className="single-video__video">
      <img className="single-video__thumbnail" src={image} alt={title} />
      <div className="single-video__video--right">
        <div className="single-video__title">{title}</div>
        <div className="single-video__channel">{channel}</div>
      </div>
    </Link>
  );
}

export default SingleVideo;
