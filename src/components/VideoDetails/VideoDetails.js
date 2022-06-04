import "./VideoDetails.scss";
import React from "react";
import viewIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";

function VideoDetails(props) {
  return (
    <section className="details">
      <h1 className="details__title">{props.selectedVideo.title}</h1>

      <div className="details__vidinfo">
        <div className="details__vidinfo--left">
          <p className="details__channel">By {props.selectedVideo.channel}</p>
          <p className="details__date">
            {new Date(props.selectedVideo.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="details__vidinfo--right">
          <div className="details__views">
            <img
              src={viewIcon}
              className="details__views--icon"
              alt="view icon"
            />
            <p className="details__views--text">{props.selectedVideo.views}</p>
          </div>
          <div className="details__likes">
            <img
              src={likeIcon}
              alt="like icon"
              className="details__likes--icon"
            />{" "}
            <p className="details__likes--text">{props.selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="details__text">{props.selectedVideo.description}</p>
    </section>
  );
}

export default VideoDetails;
