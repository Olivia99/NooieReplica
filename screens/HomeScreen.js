import React from 'react'
import { View, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native'
import HomeDeviceCard from '../components/homeDeviceCard';
import GlobalStyle from '../styles/global';
import DevicesData from '../components/Data';
import BaseStationData from '../components/Data2';
import { useState } from "react";
import BaseStationPreview from '../components/baseStationPreview';



class HomeScreen extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

            data: DevicesData,
            BSData: BaseStationData,
            maxDevice: false,
            SelectedId: ""


        }
    }
    render() {
        const renderItem = ({ item }) => (
            <HomeDeviceCard image={item.image} title={item.name} signal={item.signal} id={item.id} />
        );

        const BSItem = ({ onPress, item, style, navigation }) => (
            <TouchableOpacity onPress={onPress}>
                <View style={{ style }}>
                    <BaseStationPreview name={item.name} />
                </View>
            </TouchableOpacity>
        )

        const BSRenderItem = ({ item }) => {
            const backgroundColor = item.id === this.state.SelectedId ? "#6e3b6e" : "#f9c2ff";

            return (

                <BSItem
                    item={item}
                    onPress={() => { this.setState({ SelectedId: item.id }), alert(item.id) }}
                    style={{ backgroundColor }
                    }
                />

            );
        };



        return (
            <View style={GlobalStyle.container}>

                <View style={{ overflow: 'visible', flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <FlatList
                        data={this.state.BSData}
                        renderItem={BSRenderItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ paddingBottom: 10, paddingLeft: 20, }}
                        extraData={this.state.SelectedId}
                    />



                </View>

                <Text style={{ width: '100%', paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>Cameras</Text>


                <FlatList style={{ paddingTop: 16, overflow: 'visible' }}

                    data={this.state.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}

                />



            </View>
        );
    }
}


export default HomeScreen;

