import { Component } from "react";
import videoDetails from "../../data/video-details.json";
import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import PageBottom from "../../components/PageBottom/PageBottom";
import axios from "axios";

const API_URL = "http://localhost:8080";

class HomePage extends Component {
  state = {
    videos: [],
    selectedVideo: videoDetails[0],
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/videos`)
      .then((response) => {
        this.setState({
          videos: response.data,
        });
        const videoId = this.props.match.params.videoId || response.data[0].id;
        this.getSelectedVideo(videoId);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(previousProps) {
    const previousVideoId = previousProps.match.params.videoId;
    const currentVideoId = this.props.match.params.videoId;

    if (previousVideoId !== currentVideoId) {
      this.getSelectedVideo(currentVideoId);
    }
  }

  getSelectedVideo = (videoId) => {
    axios
      .get(`${API_URL}/videos/${videoId}`)
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainVideo selectedVideo={this.state.selectedVideo} />
        <PageBottom
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
        />
      </div>
    );
  }
}

export default HomePage;
