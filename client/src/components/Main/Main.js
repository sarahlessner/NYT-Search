import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Container, Row } from "../Grid";
import Search from "../Search";
import Saved from "../Saved";

class Main extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Jumbotron />

          <Search />
          <Saved />
        </Row>
      </Container>
    );
  }
}

export default Main;
