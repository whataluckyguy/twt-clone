import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://i.pinimg.com/originals/fd/81/15/fd81151dde1a88b3abd49afe5cdab548.jpg" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Lalit kumar{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" /> @whataluckyguy
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>
              Here is some text from the user who posted that tweet for us as a
              demo text tweet.
            </p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif" />
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
