
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/global';



const AddCam = ({ navigation }) => (
    <ScrollView>
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.bodyText}>
                Press the reset button once and wait for LED indicator flashes blue once per second.


        </Text>
            <Text style={GlobalStyle.bodyText}>
                Press “Next” when you hear a“beep” sound, and the LED turn to steady white.
        </Text>

            <Image source={require('../../assets/supercamFrontBig_2x.png')} style={{ width: 280, resizeMode: 'contain' }} />

            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.push('Add Device2')}>
                <Text style={GlobalStyle.BtnText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity style={GlobalStyle.secondaryBtn} onPress={() => navigation.navigate('Add Device2')} >
                <Text style={GlobalStyle.secondaryBtnText}>LED Didn’t Turn White</Text>
            </TouchableOpacity>


        </View>
    </ScrollView>




)

export default AddCam
