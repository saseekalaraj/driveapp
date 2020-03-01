import React, { Component } from "react";
import { Text, View } from "react-native";
import Login from "./Components/Layouts/Login";
import { Container } from "native-base";

export default class App extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Login />
      </Container>
    );
  }
}
