import React, { Component } from "react";
import axios from "axios";
import FriendList from "./components/FriendList";

import "./App.css";
import AddNewFriend from "./components/addNewFriend";

class App extends React.Component {
  /*Sets state to friends array*/
  state = {
    friends: []
  };

  componentDidMount() {
    console.log("CDM is running");
    /*Sets up axios to get data from API */
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);

        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Friends list</h1>
        <div>
          {this.state.friends.map(friend => (
            <FriendList friend={friend} key={friend.id} />
          ))}
        </div>
        <AddNewFriend />
      </div>
    );
  }
}

export default App;
