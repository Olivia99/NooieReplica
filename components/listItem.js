import React from 'react'
import styled from 'styled-components'
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const ListItem = props => (

    <Container>
        <Wrapper>
            <Text>{props.title}</Text>
            <Action>
                {props.action}
                <Image source={props.image} style={{ width: 20, height: 20, resizeMode: "contain" }} />
            </Action>
        </Wrapper>
        <Line style={{ width: screenWidth - 40, height: 1 }}></Line>
    </Container>

);

export default ListItem;
const Container = styled.View`

`;
const Wrapper = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: 20px;
margin-top: 20px;

`;


const Text = styled.Text`
font-size: 16px;
color: #585967;
`;
const Action = styled.View``;
const Line = styled.View`
background-color:#C1C1C1;
`;
const Image = styled.Image``;