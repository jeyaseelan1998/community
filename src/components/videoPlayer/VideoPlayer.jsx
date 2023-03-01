import React from "react";

const youtubeIdExtractor = (link) => {
  let pattern1 = /=[=-\w]+$/;
  let pattern2 = /\/[=-\w]+$/;
  const matched = link.match(pattern1) || link.match(pattern2) || "=4stHboFNIbA";
  const result = matched.toString().slice(1);
  return result;
};

const VideoPlayer = ({ idx, youtubeLink }) => {
  const videoId = youtubeIdExtractor(youtubeLink);
  console.log(videoId)

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`#title-${idx}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
