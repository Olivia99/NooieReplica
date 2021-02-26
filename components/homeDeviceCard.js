import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from "react-native";
import { Popup } from '../components/popup';
import GlobalStyle from '../styles/global';
import { View, Text, Switch } from 'react-native';
import { useState } from "react";




const screenWidth = Dimensions.get("window").width;

class HomeDeviceCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            isEnable: false,


        }
    }


    render() {

        const toggleSwitch = () => {

            if (this.state.isEnable == true) {
                this.setState({ isEnable: false })
            } else {
                this.setState({ isEnable: true })
            }

            console.log(this.state.isEnable)
        }

        return (

            <View style={GlobalStyle.deviceCardContainer} >
                <WrapperI>
                    <Image source={this.props.image} style={{ width: (screenWidth - 40) / 3 }} />

                    <Wrapper>
                        <Title>{this.props.title}</Title>
                        <SignalWrapper>
                            <Icon source={require("../assets/wifi_2x.png")} />
                            <Signal>{this.props.signal}</Signal>
                        </SignalWrapper>
                    </Wrapper>
                </WrapperI>


                <Switch
                    trackColor={{ false: "#D8D8D8", true: "#4A6ACE" }}
                    thumbColor={this.state.isEnabled ? "#FFFFFF" : "#FFFFFF"}
                    ios_backgroundColor="#D8D8D8"
                    onValueChange={toggleSwitch}
                    value={this.state.isEnable}
                />

                {/* <Popup
                    ref={(target) => popupRef = target}

                    // onTouchOutside={onClosePopup}
                    title="Unlink Device"
                    deviceName={this.props.title}
                    id={this.props.id}

                /> */}

            </View>
        )
    }

};




export default HomeDeviceCard;

const Container = styled.View`
background-color: #FCF6F1;
height: 85px;
border-radius: 15px;
box-shadow: 0 1px 7px rgba(32,44,90,0.15);
flex-direction: row;
justify-content: space-between;
padding-right:40px;
align-items: center;
margin-bottom: 20px;
`;

const Image = styled.Image`
height: 85px;
resizeMode: cover;
border-bottom-left-radius: 15px;
border-top-left-radius: 15px;
margin-right:20px;
`;


const Signal = styled.Text`
font-size: 14px;
color: #464646;
`;

const Unlink = styled.Image`
resizeMode: cover; 
width:25px;
height:25px;
`;


const Icon = styled.Image`
width: 15px;
resizeMode: contain;
margin-right: 10px;
`;

const Wrapper = styled.View`


`;


const WrapperI = styled.View`

flex-direction: row;
align-items: center;

`;
const Title = styled.Text`
font-size:22px;
color: #464646;
`;
const SignalWrapper = styled.View`
flex-direction: row;
padding-top: 5px;

`;
