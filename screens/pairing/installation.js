
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/global';



const Installation = ({ navigation }) => (
    <ScrollView>
        <View style={GlobalStyle.container}>
            <View>
                <Text style={GlobalStyle.bodyText}>
                    Your camera and base station have been successfully connected. Now it’s time to install the camera.
             </Text>
                <Text style={GlobalStyle.bodyText}>
                    Watch the video below for help with installation.
              </Text>
            </View>
            <View style={{ paddingBottom: 40 }}>
                <View style={{ width: '100%', backgroundColor: 'grey', height: 200 }}>
                </View>
                <Text>
                    You can also check out the user manual for instructions
            </Text>
            </View>



            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.push('Live View')}>
                <Text style={GlobalStyle.BtnText}>I’ve Installed Super Cam</Text>
            </TouchableOpacity>

            <TouchableOpacity style={GlobalStyle.secondaryBtn} onPress={() => navigation.navigate('Add Device')}>
                <Text style={GlobalStyle.secondaryBtnText}>Add Another Device</Text>
            </TouchableOpacity>

        </View>



    </ScrollView>


)

export default Installation
