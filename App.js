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

const Stack = createStackNavigator();


export default class App extends React.Component {
  render() {

    return (

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Add Device" component={AddDeviceBS}
          />
          <Stack.Screen name="Add Device2" component={AddDeviceSC} options={{ title: 'Add Device' }} />
          <Stack.Screen name="Name Your Device" component={NameDevice} />
          <Stack.Screen name="Installation" component={Installation} />
        </Stack.Navigator>
      </NavigationContainer>

      // <Container>
      //   <AddDeviceBS />
      // </Container>
    );
  }
}

const Container = styled.View`
  background: #F4F0ED;
  flex: 1;
`;