import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import GlobalStyle from '../styles/global';


const BaseStationPreview = (props) => (

    <View style={GlobalStyle.BSPreview}>
        <Image source={require('../assets/BSPreview_2x.png')} style={{ width: 80, resizeMode: 'contain' }} />
        <Text>{props.name}</Text>
    </View>

);



export default BaseStationPreview