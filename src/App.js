import "./App.scss";
import { Component } from "react";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import Comments from "./components/Comments/Comments";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";

class App extends Component {
  state = {
    videos,
    videoDetails,
    selectedVideo: videoDetails[0],
  };

  handleClick = (id) => {
    let chosenVideo = this.state.videoDetails.find((video) => video.id === id);
    this.setState({
      selectedVideo: chosenVideo,
    });
  };

  videoFilter = (id) => {
    let chosenVideo = this.state.videoDetails.find((video) => video.id === id);
    this.setState({
      selectedVideo: chosenVideo,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainVideo selectedVideo={this.state.selectedVideo} />
        <VideoDetails selectedVideo={this.state.selectedVideo} />
        <Comments selectedVideo={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
