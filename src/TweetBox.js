import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://i.pinimg.com/originals/fd/81/15/fd81151dde1a88b3abd49afe5cdab548.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>

        <input
          className="tweetbox_imageInput"
          type="text"
          placeholder="Enter Image URL"
        />

        <Button className="tweetbox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
