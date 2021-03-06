import React from "react";
import { Description } from "./styles";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = "https://www.youtube.com/embed/" + videoId;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <Description>
        <div>{video.snippet.title}</div>
        <Description>{video.snippet.description}</Description>
      </Description>
    </div>
  );
};

export default VideoDetail;
