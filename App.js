import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import BaseStationScreen from './screens/BaseStationScreen.js'
import AddDeviceBS from './screens/pairing/addDeviceBS'
import AddDeviceSC from './screens/pairing/addDeviceSC'
import NameDevice from './screens/pairing/nameDevice'
import Installation from './screens/pairing/installation';
import BaseStationStatus from './components/BaseStationStatus.js';
import LiveView from './components/liveView.js';
import AddCam from './screens/pairing/addCam'
import LiveViewScreen from './screens/liveViewScreen.js';
import { MyStack } from './navigator/Navigators.js';

const Stack = createStackNavigator();


export default class App extends React.Component {
  render() {

    return (

      <MyStack />

      // <Container>
      //   <BaseStationScreen ref={(target) => deleteRef = target} />
      //   <LiveViewScreen />
      // </Container>
    );
  }
}

const Container = styled.View`
  background: #F4F0ED;
  flex: 1;
`;