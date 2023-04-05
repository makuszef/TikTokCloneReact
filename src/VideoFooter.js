import React from "react";
import "./VideoFooter.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <h1>{song}</h1>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://seeklogo.com/images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png"
        className="videoFooter__record"
        alt=""
      ></img>
    </div>
  );
}

export default VideoFooter;
