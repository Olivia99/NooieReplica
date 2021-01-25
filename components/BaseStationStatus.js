import React from 'react'
import styled from 'styled-components'
import { Dimensions, PanResponder, Animated, TouchableOpacity } from "react-native";

import Clipboard from '@react-native-community/clipboard'

const screenWidth = Dimensions.get("window").width;

class BaseStationStatus extends React.Component {

    render() {



        return (

            <Container  >

                <Wrapper style={{ display: "block" }}>
                    <Image source={require('../assets/baseStation_2x.png')} renderMode='contain' />
                    < Content >
                        <Item>
                            <TextWrapper>
                                <Text>Name: </Text>
                                <Text>{this.props.name}</Text>
                            </TextWrapper>
                            <Action>

                            </Action>
                        </Item>


                        <TextWrapper>
                            <Text>Status: </Text>
                            <Text>{this.props.status}</Text>

                        </TextWrapper>

                        <Item>
                            <TextWrapper>

                                <Text>Firmware: </Text>
                                <Text>{this.props.firmware}</Text>
                            </TextWrapper>
                            <Action>
                                <TouchableOpacity>
                                    <ActionText>UPDATE</ActionText>
                                </TouchableOpacity>
                            </Action>
                        </Item>
                        <Item>
                            <TextWrapper>
                                <Text>ID: </Text>

                                <Text>{this.props.id}</Text>

                            </TextWrapper>
                            <TouchableOpacity>
                                <ActionText>COPY</ActionText>
                            </TouchableOpacity>


                        </Item>

                    </Content>
                </Wrapper>

            </Container>





        )
    }

}

const Tab = styled.View`
`;
const TopWrapper = styled.View`


`;
const Container = styled.View`
/* color: #FCF6F1; */
align-items:center;
justify-content: space-between;

`;
const Text = styled.Text`
color: #585967;
font-size: 14px;

`;
const Wrapper = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
padding-left:20px;
padding-right:20px;


`;
const Content = styled.View`


`;
const TextWrapper = styled.View`
flex-direction: row;
padding:6px;
width:  190px;
`;
const Image = styled.Image`
margin-right:40px;

width: 60px;
height: 127px;
`;
const Item = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const Action = styled.View``;
const ActionText = styled.Text`

color: #4A6ACE;
font-size: 14px;

`;



export default BaseStationStatus