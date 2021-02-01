import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddDeviceBS from '../screens/pairing/addDeviceBS';
import AddDeviceSC from '../screens/pairing/addDeviceSC';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Add Device"
                    component={AddDeviceBS}
                    options={{ title: 'Base Station' }}
                />
                <Stack.Screen name="Add Device2" component={AddDeviceSC} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};