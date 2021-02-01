import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

const AddDeviceBtn = props => (

    <Container>
        <Image source={require("../assets/addDevice_2x.png")} />
        <Text>Add Device</Text>
    </Container>

);

export default AddDeviceBtn

const Container = styled.View`
align-items:center;
justify-content: center;
padding: 30px;
`;
const Image = styled.Image`
width: 30px;
height: 30px;
margin-bottom: 10px;
`;
const Text = styled.Text`
font-size: 14px;
color: #585967;
`;