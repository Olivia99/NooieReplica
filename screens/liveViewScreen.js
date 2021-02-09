import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ceil } from 'react-native-reanimated';

import LiveView from '../components/liveView';
import GlobalStyle from '../styles/global';
import { StyleSheet } from 'react-native'



class LiveViewScreen extends React.Component {
    state = {
        toggle: false,

    }

    render() {
        let { toggle, color } = this.props

        color = "#585963"

        function Toggle() {
            toggle = !toggle
            console.log(toggle)
            console.log(color)
            if (toggle) {
                color = "4A6ACE"
            } else {
                color = "#585963"
            }
        }

        return (
            <View style={GlobalStyle.containerDark}>
                <View style={{ height: '100%', justifyContent: 'center' }}>
                    <LiveView />


                    <TouchableOpacity onPress={() => Toggle()}>
                        <View style={{
                            width: 100,
                            paddingBottom: 5,
                            paddingTop: 5,
                            backgroundColor: color,
                            alignItems: 'flex-end',
                            borderRadius: 20,
                            paddingRight: 15,
                            marginLeft: -17,
                            marginTop: 40
                        }}>
                            <Image style={{ width: 30, resizeMode: 'contain' }} source={require('../assets/spotlightIcon_2x.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View >
        );
    }
}

export default LiveViewScreen
