import React from 'react'
import styled from 'styled-components'

import {
    Dimensions,
    TouchableOpacity,
    Animated,
    ScrollView,
    PanResponder,
    TouchableWithoutFeedback,
    FlatList,
    View,

} from "react-native";
import BSDeviceCard from '../components/BSDeviceCard';
import AddDeviceBtn from '../components/AddDeviceBtn';
import BaseStationStatus from '../components/BaseStationStatus';
import ListItem from '../components/listItem';
import DevicesData from '../components/Data'



const screenWidth = Dimensions.get("window").width;

class BaseStationScreen extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            translateY: -1000,
            xTabOne: 0,
            xTabTwo: 0,
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(screenWidth),
            collapse: false,
            opacity: 1,
            pan: new Animated.ValueXY(),
            margin: 250,
            show: false,
            data: DevicesData,
            key: ""

        }

    }




    addDevice() {
        // this.setState({
        //     data: [
        //         ...DevicesData, {
        //             id: 3,
        //             name: 'Master Room',
        //             image: require('../assets/birdHouse.png'),
        //             signal: 'Good'
        //         }
        //     ]
        // }
        // )



    }



    deleteDevice = (id) => {
        var arr = this.state.data
        // var pos = arr.indexOf(id);
        arr.splice(id, 1)
        this.setState({ data: arr })
        console.log(id)

    }


    UNSAFE_componentWillMount() {

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                this.state.pan.setOffset({
                    y: this.state.pan.y._value
                });
            },

            onPanResponderMove: Animated.event([
                null,
                { dy: this.state.pan.y }
            ]),

            onPanResponderRelease: () => {
                const positionY = this.state.pan.y._value
                console.log(positionY)

                // this.setState({
                //     display: "none",
                // })
                if (!this.state.collapse) {
                    if (positionY < -10) {
                        this.setState({
                            opacity: 0,
                            margin: 0,
                            collapse: true
                        })

                        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();

                    }
                    else {
                        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
                    }


                } else {
                    if (positionY > 50) {
                        this.setState({
                            opacity: 1,
                            margin: 250,
                            collapse: false
                        })
                        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();

                    }
                    else {
                        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
                    }

                }

            }
        });
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

        let { active, translateY, translateXTabOne, translateXTabTwo, xTabTwo, xTabOne, data } = this.state

        const pressHandler = (id) => {
            console.log(id)
        }
        const { navigation } = this.props;
        const renderItem = ({ item }) => (


            <BSDeviceCard image={item.image} title={item.name} signal={item.signal} id={item.id} />

        );

        return (
            <Container>
                <Animated.View
                    style={{
                        transform: [{ translateY: this.state.pan.y }]
                    }}
                    {...this._panResponder.panHandlers}
                >
                    <Spacer style={{ height: this.state.margin }}>
                        <Top>
                            <StatusWrapper style={{ opacity: this.state.opacity }}>
                                <BaseStationStatus name={'Base Station'} status={'Online'} firmware={'1.05.01'} id={'E32K55E82DW93..'} />

                            </StatusWrapper>

                        </Top>
                        <Bar></Bar>
                    </Spacer >
                </Animated.View>
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
                    useNativeDriver={true}

                >
                    <FlatList

                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Add Device')}>
                        <AddDeviceBtn ></AddDeviceBtn>
                    </TouchableOpacity>


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
                    useNativeDriver={true}>

                    <ListItem title={"Ringtone"} image={require('../assets/arrow_2x.png')} />
                    <ListItem title={"Ringtone Volume"} />

                </Animated.View>

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
padding-bottom:30px;
width:100%;


`;

const StatusWrapper = styled.View`

padding-bottom:20px;


`;

const Top = styled.View`
/* opacity: 0;
margin-top:-130 */
`;

const Spacer = styled.View`
padding-top:100px;
background-color: #FCF6F1;
width: 100%;
justify-content: space-between;
z-index: 1;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
box-shadow: 0 1px 7px rgba(32,44,90,0.15);
align-items: center;


`;


const Bar = styled.View`
width: 100px;
height: 5px;
background-color: #D8D3D2;
z-index:2;
border-radius: 10px;
margin-bottom: 20px;
margin-top: -10px;

`;