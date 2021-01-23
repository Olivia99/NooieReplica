import React from 'react'
import styled from 'styled-components'
import { Dimensions, PanResponder, Animated } from "react-native";

const screenWidth = Dimensions.get("window").width;

class BaseStationStatus extends React.Component {
    state = {
        active: 0,
        translateY: -1000,
        moved: false,
    };

    pan = new Animated.ValueXY();
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {

            this.pan.setOffset({
                y: this.pan.y._value
            });


        },
        onPanResponderMove: Animated.event([
            null,
            { dy: this.pan.y }
        ]),

        onPanResponderRelease: () => {

        }
    });

    position = 0;
    display = "block"

    render() {
        let { active, translateY, moved, position, display } = this.state;
        if (moved) {
            position = -140;
            display = "none"
        }
        return (
            <Animated.View
                style={{
                    transform: [{ translateY: this.pan.y }]
                }}
                {...this.panResponder.panHandlers}
            >

                <Container style={{ top: position }} >
                    <TopWrapper>
                        <Wrapper style={{ display: display }}>
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
                                        <ActionText>UPDATE</ActionText>
                                    </Action>
                                </Item>
                                <Item>
                                    <TextWrapper>
                                        <Text>ID: </Text>
                                        <Text>{this.props.id}</Text>
                                    </TextWrapper>
                                    <ActionText>
                                        COPY
                        </ActionText>
                                </Item>

                            </Content>
                        </Wrapper>
                    </TopWrapper>
                    <Bar></Bar>
                </Container>


            </Animated.View>


        )
    }

}

const Tab = styled.View`
`;
const TopWrapper = styled.View`
background-color: #FCF6F1;
width: 100%;
height: 250px;
justify-content: center;


z-index: 1;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
box-shadow: 0 1px 7px rgba(32,44,90,0.15);

`;
const Bar = styled.View`
width: 100px;
height: 5px;
background-color: #D8D3D2;
margin-top: -20px;
z-index:2;
border-radius: 10px;

`;
const Container = styled.View`
/* color: #FCF6F1; */
align-items:center;
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
margin-bottom: -30px;

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