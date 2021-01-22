import React from 'react'
import styled from 'styled-components'

import {
    Dimensions,
    TouchableOpacity,
    Animated,
    ScrollView,
} from "react-native";
import BSDeviceCard from '../components/BSDeviceCard';
import AddDeviceBtn from '../components/AddDeviceBtn';
import BaseStationStatus from '../components/BaseStationStatus';



const screenWidth = Dimensions.get("window").width;

class BaseStationScreen extends React.Component {
    state = {
        active: 0,
        translateY: -1000,
        xTabOne: 0,
        xTabTwo: 0,
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(screenWidth),
    }

    handleSlide = tyle => {
        let { active, translateXTabOne, translateXTabTwo, translateY, xTabOne, xTabTwo } = this.state
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: screenWidth,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -screenWidth,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    }
    render() {
        let { active, translateY, translateXTabOne, translateXTabTwo, xTabTwo, xTabOne } = this.state
        return (
            <Container>
                <BaseStationStatus name={'Base Station'} status={'Online'} firmware={'1.05.01'} id={'E32K55E82DW93..'} />

                <TabBarWrapper>
                    <TouchableOpacity
                        style={{ paddingRight: "10%" }}
                        onPress={() =>
                            this.setState({ active: 0 }, () => this.handleSlide(xTabOne)
                            )
                        }
                    >
                        <TabText
                            style={{
                                color: active === 0 ? "#464646" : "#A4A4A4"
                            }}

                        >Devices</TabText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ paddingLeft: "10%" }}
                        onPress={() =>
                            this.setState({ active: 1 }, () => this.handleSlide(xTabTwo)
                            )
                        }
                    >
                        <TabText style={{
                            color: active === 0 ? "#A4A4A4" : "#464646"
                        }}>
                            Settings
                        </TabText>
                    </TouchableOpacity>
                </TabBarWrapper>




                <ScrollView >
                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabOne
                                }
                            ]
                        }}
                        onLayout={event =>
                            this.setState({
                                translateY: event.nativeEvent.layout.height
                            })}
                        useNativeDriver="ture"
                    >




                        <BSDeviceCard image={require("../assets/garage.jpg")} title={"Garage Door"} signal={"Strong"} />

                        <AddDeviceBtn></AddDeviceBtn>


                    </Animated.View>

                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabTwo
                                },
                                {
                                    translateY: -translateY
                                }
                            ]
                        }}
                        useNativeDriver="ture">



                        <Text>Settings</Text>



                    </Animated.View>
                </ScrollView>
            </Container >
        )
    }
}
export default BaseStationScreen

const Container = styled.View``;

const TabText = styled.Text`
font-weight: 600;
font-size: 16px;`;
const Text = styled.Text`

`;
const TabBarWrapper = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
padding-top:20px;
padding-bottom:20px;
width:100%;

`;