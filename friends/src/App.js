import React, { Component } from "react";
import axios from "axios";
import FriendList from "./components/FriendList";
import styled from "styled-components";
import "./App.css";
import AddNewFriend from "./components/addNewFriend";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  background: papayawhip;
  font-size: 1em;
`;

class App extends React.Component {
  /*Sets state to friends array*/
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: " ",
        age: null,
        email: " "
      }
    };
  }

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
        <Title>Lambda Friends List</Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendList friend={friend} key={friend.id} />
          ))}
        </Wrapper>
        <AddNewFriend />
      </div>
    );
  }
}

export default App;
