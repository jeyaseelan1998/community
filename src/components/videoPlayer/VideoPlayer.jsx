import React from "react";

const youtubeIdExtractor = (link) => {
  let pattern = /=[=-\w]+/;
  const matched = link.match(pattern) || '';
  const result = matched.toString().slice(1);
  return result;
};

const SAMPLE = "https://www.youtube.com/watch?v=nQsvpG1kOuM";

const VideoPlayer = ({ idx, youtubeLink = SAMPLE }) => {
  const videoId = youtubeIdExtractor(youtubeLink);
  console.log(youtubeLink, videoId);
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
