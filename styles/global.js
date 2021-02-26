import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get("window").width;

const GlobalStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#F3F0ED',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20,
            height: '100%',

        },
        containerDark: {

            backgroundColor: '#464754',

            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20,
            height: '100%',
        },
        bodyText: {
            fontSize: 15,
            color: '#585967',
            textAlign: 'center',
            paddingTop: 40,
            paddingLeft: 40,
            paddingRight: 40,
        },
        primaryBtn: {
            backgroundColor: '#5069C7',
            width: 250,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: 25,
        },
        BtnText: {
            fontSize: 16,
            color: '#FFFFFF'
        },
        secondaryBtn: {
            backgroundColor: '#F3F0ED',
            width: 250,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            borderColor: '#919191',
            borderStyle: 'solid',
            borderWidth: 1,
            marginBottom: 25,
        },
        secondaryBtnText: {
            fontSize: 16,
            color: '#464754'
        },
        capsuleBtn: {
            backgroundColor: '#F3F0ED',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            borderColor: '#919191',
            borderStyle: 'solid',
            borderWidth: 1,
            marginTop: 25,
            paddingLeft: 30,
            paddingRight: 30,
            marginRight: 20,

        },
        capsuleText: {
            fontSize: 16,
            color: '#585967'
        },
        titleText: {
            fontSize: 16,
            color: '#464754',
            fontWeight: '500',

        },
        liveView: {
            width: '100%',
            height: 250,


        },
        deviceCardContainer: {
            backgroundColor: '#FCF6F1',
            height: 85,
            borderRadius: 15,
            paddingRight: 40,
            alignItems: 'center',
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            shadowOffset: { width: 4, height: 7, },
            shadowColor: '#202C5A',
            shadowOpacity: 0.15,
            width: screenWidth - 40,
        },
        BSPreview: {
            width: 115,
            height: 90,
            backgroundColor: '#FCF6F1',
            shadowOffset: { width: 4, height: 7, },
            shadowColor: '#202C5A',
            shadowOpacity: 0.15,
            justifyContent: 'center',
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
            marginRight: 20

        }


    }
)


export default GlobalStyle;