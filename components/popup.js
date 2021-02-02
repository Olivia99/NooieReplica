import React from 'react'
import { Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import BaseStationScreen from '../screens/BaseStationScreen'

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get('window').width

export class Popup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.deleteRef = React.createRef()
    }

    onDeleteDevice = () => {
        const { id } = this.props
        deleteRef.deleteDevice(id)
        // console.log(id)

    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }
    renderContent = () => {
        const { deviceName, id } = this.props
        return (
            <Content style={{ marginBottom: 30, marginTop: 10 }}>


                <Text >
                    Are you sure you want to remove {deviceName}?</Text>
                <Text>

                    Unlink this device will result in it being removed from your camera list.
                </Text>
            </Content>

        )
    }



    renderTitle = () => {
        const { title } = this.props
        return (
            <Title style={{ color: '#464754', fontSize: 20, fontWeight: "500" }}>

                {title}
            </Title>

        )
    }

    //     renderPrimaryBtn = () => {
    //         return (
    //             <TouchableOpacity

    //                 onPress={() => onDeleteDevice()}
    //                 style={{ marginLeft: 50, marginRight: 50, backgroundColor: '#5069C7', height: 45, borderRadius: 20, width: '80%', justifyContent: 'center', alignItems: 'center' }}>
    //                 <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '600' }}>
    //                     Confirm
    // </Text>
    //             </TouchableOpacity>
    //         )

    //     }
    renderSecondaryBtn = () => {
        return (
            <TouchableOpacity onPress={() => (this.close())} style={{ marginLeft: 50, marginRight: 50, height: 45, borderRadius: 20, width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#464754', fontSize: 14, fontWeight: '600' }}>
                    Cancel
</Text>
            </TouchableOpacity>
        )

    }

    renderOutsideTouchable(onTouch) {
        const view = <ViewWrapper />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    render() {





        let { show } = this.state
        const { onTouchOutside, content, title, id } = this.props
        return (

            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View>
                    {/* {this.renderOutsideTouchable(onTouchOutside)} */}


                    <Background>

                        {this.renderTitle()}
                        {this.renderContent()}
                        <TouchableOpacity

                            onPress={() => {
                                this.close(),

                                    setTimeout(() => { this.onDeleteDevice(id) }, 1500)
                            }}
                            style={{ marginLeft: 50, marginRight: 50, backgroundColor: '#5069C7', height: 45, borderRadius: 20, width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '600' }}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                        {this.renderSecondaryBtn()}

                    </Background>
                    {/* {this.renderOutsideTouchable(onTouchOutside)} */}

                </View>


            </Modal>
        )
    }
}



const View = styled.View`
flex: 1;

background-color: #000000AA;
justify-content: center;

`;

const ViewWrapper = styled.View`
flex: 1;
width: 100%;
`;

const Background = styled.View`
background-color: #ffffff;
border-radius: 10px;
padding:20px;
justify-content: center;
align-items: center;
margin: 20px;




`;


const Text = styled.Text`
color: #585967;
font-size: 16px;
font-weight: 400;
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 5px;
margin-left: 5px;
`;

const Title = styled.Text`

`;

const Content = styled.View``;
