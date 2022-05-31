import "./MainVideo.scss";
import React from "react";

function MainVideo(props) {
  return (
    <section className="main">
      <video
        controls
        poster={props.selectedVideo.image}
        className="main__video"
      >
        <source src={props.selectedVideo.video + "?api_key=test"} />
      </video>
    </section>
  );
}

export default MainVideo;
