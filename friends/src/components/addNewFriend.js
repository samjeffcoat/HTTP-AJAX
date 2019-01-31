import React from "react";

function AddNewFriend(props) {
  return (
    <form onSubmit={props.newFriend}>
      <input
        type="text"
        name="name"
        value={props.newFriend.name}
        onChange={props.handleChanges}
      />
    </form>
  );
}

export default AddNewFriend;
