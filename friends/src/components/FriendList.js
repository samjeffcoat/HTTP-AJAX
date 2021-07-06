import React from "react";
import Friend from "./Friend";

function FriendList(props) {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend friends={friend} key={friend} />
      ))}
    </div>
  );
}

export default FriendList;
