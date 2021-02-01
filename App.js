import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import BaseStationScreen from './screens/BaseStationScreen.js'


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <BaseStationScreen ref={(target) => deleteRef = target} />
      </Container>
    );
  }
}

const Container = styled.View`
  background: #F4F0ED;
  flex: 1;
`;