import "./PageBottom.scss";
import React from "react";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";

function PageBottom({ selectedVideo, videos, handleClick }) {
  return (
    <div className="page-bottom">
      <div className="page-bottom__left">
        <VideoDetails selectedVideo={selectedVideo} />
        <Comments selectedVideo={selectedVideo} />
      </div>
      <div className="page-bottom__right">
        <VideoList
          videos={videos}
          selectedVideo={selectedVideo}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default PageBottom;
