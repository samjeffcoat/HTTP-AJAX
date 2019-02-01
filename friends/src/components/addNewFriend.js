import React from "react";

function AddNewFriend(props) {
  return (
    <form onSubmit={props.newFriend}>
      <input
        type="text"
        name="name"
        value={props.friends.name}
        placeholder="name"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        name="Email"
        value={props.friends.email}
        placeholder="Email"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        name="Age"
        value={props.friends.age}
        placeholder="age"
        onChange={props.handleChanges}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddNewFriend;
