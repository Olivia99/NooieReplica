import React from 'react'
import styled from 'styled-components'
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

class BaseStationStatus extends React.Component {
    state = {
        active: 0,
        translateY: -1000
    };

    // handleChange = type => {
    //     let {active, translateY} = this.state;

    //     }
    // }

    render() {
        let { active, translateY } = this.state;

        return (
            <Container>
                <Wrapper>
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


            </Container>


        )
    }

}

const Tab = styled.View`
`;

const Container = styled.View`
/* color: #FCF6F1; */
background-color: #FCF6F1;
width: 100%;
height: 250px;
justify-content: center;

z-index: 1;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
box-shadow: 0 1px 7px rgba(32,44,90,0.15);

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