import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import {
  Container,
  Content,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  Button,
  Icon
} from "native-base";
//import user from '../Assets/icons8-user-100.png"';

export default class Login extends Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#e6e6e6",flexDirection: 'column', }}>
        <Content>
          <CardItem
            style={{
              flex: 5,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center"
              // marginLeft: 200
            }}
          >
            <Image source={require("../Assets/icons8-user-100.png")} />
          </CardItem>
          <CardItem
            cardBody
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "space-between",
              width: "100%"
            }}
          >
            <Form style={{ flex: 1, width: "100%" }}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last style={{ marginBottom: 10 }}>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button transparent primary>
                <Icon name="beer" />
              </Button>
            </Form>
          </CardItem>
        </Content>
      </Container>
    );
  }
}
