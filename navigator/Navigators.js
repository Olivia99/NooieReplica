import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddDeviceBS from '../screens/pairing/addDeviceBS';
import AddDeviceSC from '../screens/pairing/addDeviceSC';
import NameDevice from '../screens/pairing/nameDevice';
import BaseStationScreen from '../screens/BaseStationScreen';
import Installation from '../screens/pairing/installation';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import LiveViewScreen from '../screens/liveViewScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const MyStack = (navigation) => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name="BS Status"
                    component={BaseStationScreen}
                    options={{
                        headerShown: false,

                    }}


                />
                <Stack.Screen
                    name="Add Device" component={AddDeviceBS} options={{
                        headerStyle: {
                            backgroundColor: '#F4F0ED',
                            shadowColor: "#F4F0ED",

                        }
                    }}
                />
                <Stack.Screen name="Add Device2" component={AddDeviceSC} options={{
                    title: 'Add Device',
                    headerStyle: {
                        backgroundColor: '#F4F0ED',
                        shadowColor: "#F4F0ED",

                    },

                }} />
                <Stack.Screen name="Name Your Device" component={NameDevice} options={{
                    headerStyle: {
                        backgroundColor: '#F4F0ED',
                        shadowColor: "#F4F0ED",

                    }
                }} />
                <Stack.Screen name="Installation" component={Installation} options={{
                    headerStyle: {
                        backgroundColor: '#F4F0ED',
                        shadowColor: "#F4F0ED",

                    }
                }} />

                <Stack.Screen name="Live View" component={LiveViewScreen} options={{
                    headerStyle: {
                        backgroundColor: '#464754',
                        shadowColor: "#464754",


                    },
                    headerTitleStyle: { color: 'white' },
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};





export const BSPairingStack = (navigation) => {
    return (
        <NavigatorContainer>

            <BSPairingStack.Navigator>
                <BSPairingStack.Screen
                    name="Add Base Station"
                    component={AddDeviceBS}
                    options={{ title: 'Add Base Station' }}
                />
                <BSPairingStack.Screen
                    name="Name Device"
                    component={NameDevice}
                    options={{ title: 'Name Your Camera' }}
                />
            </BSPairingStack.Navigator>

        </NavigatorContainer>

    )
}




export const HomeNavigation = (navigation) => {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Cam" component={HomeScreen} />
                <Tabs.Screen name="Home" component={HomeScreen} />
                <Tabs.Screen name="Account" component={HomeScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

