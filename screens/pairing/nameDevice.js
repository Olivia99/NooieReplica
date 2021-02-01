import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { StyleSheet } from 'react-native'
import GlobalStyle from '../../styles/global';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;




const NameDevice = ({ navigation }) => (
    <ScrollView >
        <View style={{ height: screenHeight - 80 }}>
            <View style={GlobalStyle.container}>
                <Image source={require('../../assets/superCam/superCam_1x.png')} style={{ width: 80, resizeMode: 'contain', marginBottom: 20 }} />
                <View style={{ width: screenWidth - 80, justifyContent: 'flex-start' }}>
                    <Text style={GlobalStyle.titleText}>
                        Name
                    </Text>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            style={{ height: 40, fontSize: 16, color: '#585967' }}
                            onChangeText={text => onChangeText(text)}
                            value={"value"}
                        />
                        <View style={{ width: '100%', height: 1, borderColor: '#919191', borderWidth: 0.5 }}></View>
                    </View>

                    <Text style={GlobalStyle.titleText}>
                        Suggestions
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>

                        <TouchableOpacity style={GlobalStyle.capsuleBtn}>
                            <Text style={GlobalStyle.capsuleText}> Doorbell</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={GlobalStyle.capsuleBtn}>
                            <Text style={GlobalStyle.capsuleText}> Front Door </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <TouchableOpacity
                style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#4F6BC7', height: 80, justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                onPress={() => navigation.push('Installation')}
            >
                <Text style={GlobalStyle.BtnText}> Next</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
)

export default NameDevice