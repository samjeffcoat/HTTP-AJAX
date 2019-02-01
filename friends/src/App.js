import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import "./App.css";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: blue;
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

  //Sets us up to be able to type into out boxes and only one the fields being typed into will accept new values
  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };
  addFriend = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/friends");
  };
  render() {
    return (
      <div className="App">
        <Title>Lambda Friends List</Title>
        <FriendList friends={this.state.friends} />
        <FriendForm
          friends={this.state.friends}
          newFriend={this.state.newFriend}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
