"use client";

import { useState } from "react";
// import { XCircle } from "@phosphor-icons/react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
      >
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
