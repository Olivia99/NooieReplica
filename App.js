import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import BaseStationStatus from "./components/BaseStationStatus";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <BaseStationStatus name={'Base Station'} status={'Online'} firmware={'1.05.01'} id={'E32K55E82DW93..'} />
      </Container>
    );
  }
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;