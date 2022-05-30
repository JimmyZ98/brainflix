import "./App.css";
import { Component } from "react";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import Comments from "./components/Comments/Comments";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import SideVideos from "./components/SideVideos/SideVideos";

class App extends Component {
  state = {
    videoDetails,
    selectedVideo: videoDetails[0],
  };

  render() {
    return (
      <div>
        <Header />
        <MainVideo />
        <VideoDetails />
        <Comments />
        <SideVideos />
      </div>
    );
  }
}

export default App;
