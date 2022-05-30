import "./VideoDetails.scss";
import React from "react";

function VideoDetails() {
  return (
    <section className="details">
      <div className="details__title">
        <h1 className="details__title--text">BMX Rampaeg: 2021</h1>
      </div>
      <div className="details__vidinfo">
        <div className="details__vidinfo--left">
          <p className="details__author"></p>
          <p className="details__date"></p>
        </div>
        <div className="details__vidinfo--right">
          <p className="details__views"></p>
          <p className="details__likes"></p>
        </div>
      </div>
    </section>
  );
}

export default VideoDetails;
