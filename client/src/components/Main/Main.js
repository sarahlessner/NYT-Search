import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Container } from "../Grid";
import Search from "../Search";
import Saved from "../Saved";

class Main extends Component {

  render() {
    return (
      <Container>
        <Jumbotron />
        <Search />
        <Saved />
      </Container>
    );
  }
}

export default Main;
