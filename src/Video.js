import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        loop
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
        src="https://www.tiktok.com/@stevenrendon777/video/6827545924466691334"
      ></video>
      <VideoFooter channel="Qazi" description="description" song="Usher-Yeah" />
      <VideoSidebar />
    </div>
  );
}

export default Video;
