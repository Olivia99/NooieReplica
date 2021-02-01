import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/global';




const AddDeviceSC = ({ navigation }) => (
    <ScrollView >
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.bodyText}>
                Press the reset button once and wait for LED indicator flashes blue once per second.
        </Text>
            <Text style={GlobalStyle.bodyText}>
                Press “Next” when you hear a“beep” sound, and the LED turn to steady white.
        </Text>

            <Image source={require('../../assets/superCam/superCam_2x.png')} style={{ width: 130, resizeMode: 'contain', marginBottom: 20 }} />

            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.push('Name Your Device')}>
                <Text style={GlobalStyle.BtnText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity style={GlobalStyle.secondaryBtn} >
                <Text style={GlobalStyle.secondaryBtnText}>LED Didn’t Turn White</Text>
            </TouchableOpacity>


        </View>
    </ScrollView>



)

export default AddDeviceSC
