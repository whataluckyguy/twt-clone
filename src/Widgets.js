import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <div className="widgets_input_design">
          <SearchIcon className="widgets_searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
      </div>
      <div className="widgets_container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1394995033250611201"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="lalit7142"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://instagram.com/whataluckygy_"}
          options={{ text: "#reactjs is 🔥", via: "lalit7142" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
