import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'


class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Text>Design+Code</Text>
            </Container>
        );
    }
}


export default HomeScreen

const Container = styled.View``;
const Text = styled.Text``;