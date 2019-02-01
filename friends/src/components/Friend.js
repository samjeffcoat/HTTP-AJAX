import React from "react";

function Friend(props) {
  return (
    <div className="card">
      <h2>Name:{props.friends.name}</h2>
      <h3>Age: {props.friends.age}</h3>
      <h3>Email: {props.friends.email}</h3>
    </div>
  );
}

export default Friend;
