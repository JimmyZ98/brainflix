import { Component } from "react";
import videoDetails from "../../data/video-details.json";
import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import PageBottom from "../../components/PageBottom/PageBottom";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY_STRING = "?api_key=e82413f2-dc28-4f4e-8bb9-704af807b4f4";

class HomePage extends Component {
  constvi;
  state = {
    videos: [],
    selectedVideo: videoDetails[0],
    invalidVideo: false,
  };

  componentDidMount() {
    axios.get(`${API_URL}/videos${API_KEY_STRING}`).then((response) => {
      this.setState({
        videos: response.data,
      });

      const videoId = this.props.match.params.videoId || response.data[0].id;
      this.getSelectedVideo(videoId);
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
      .get(`${API_URL}/videos/${videoId}${API_KEY_STRING}`)
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
          invalidVideo: false,
        });
      })
      .catch((error) => {
        this.setState({
          invalidVideo: true,
        });
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
