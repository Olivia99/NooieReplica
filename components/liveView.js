import React from 'react'
import GlobalStyle from '../styles/global';
import { View, Text, Image, TouchableOpacity } from 'react-native'

class LiveView extends React.Component {
    render() {
        return (
            <View >
                <Image style={GlobalStyle.liveView} source={require('../assets/liveView_2x.png')} />

                <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-evenly', paddingTop: 20, paddingBottom: 20 }}>
                    <TouchableOpacity>
                        <Image style={{ width: 48, height: 48, resizeMode: 'contain' }} source={require('../assets/recordWhiteHorizontal_2x.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ width: 48, height: 48, resizeMode: 'contain' }} source={require('../assets/cameraWhiteHorizontal_2x.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ width: 48, height: 48, resizeMode: 'contain' }} source={require('../assets/alarmWhiteHorizontal_2x.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ width: 48, height: 48, resizeMode: 'contain' }} source={require('../assets/speakerWhiteHorizontal_2x.png')} />
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Image style={{ width: 48, height: 48, resizeMode: 'contain' }} source={require('../assets/audioOffWhiteHorizontal_2x.png')} />
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
}

export default LiveView