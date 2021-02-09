
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/global';



const PressBSBtn = ({ navigation }) => (
    <ScrollView>
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.bodyText}>
                Please press the button once.


        </Text>
            <Text style={GlobalStyle.bodyText}>
                Click "Next" when you see the base station's LED flashes blue once per second.
        </Text>

            <Image source={require('../../assets/baseStationFront_2x.png')} style={{ width: 130, resizeMode: 'contain', marginBottom: 20 }} />

            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.push('Add Device2')}>
                <Text style={GlobalStyle.BtnText}>Next</Text>
            </TouchableOpacity>


        </View>
    </ScrollView>

)

export default PressBSBtn
