import "./MainVideo.scss";
import React from "react";

function MainVideo(props) {
  return (
    <section className="main">
      <video width="500" poster={props.selectedVideo.image}>
        <source src={props.selectedVideo.video + "?api_key=test"} />
      </video>
    </section>
  );
}

export default MainVideo;
