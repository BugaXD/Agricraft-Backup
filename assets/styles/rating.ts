import { StyleSheet } from "react-native";

export const rating= () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 10,
            backgroundColor: '#F4F8FF',
        },

        scrollContainer: {
            flexGrow: 1,
            padding: 10,
        },

        arrow: {
            width: 35,
            height: 35,
            marginLeft: 26,
            marginTop: 20,
        },

        headerText: {
            fontSize: 28,
            fontWeight: 'bold',
            width: '100%',
            color: 'black',
            marginLeft: 20,
            marginTop: 19,
            marginBottom: 15,
        },

        ratingContainer: {
            height: 220,
            width: '97%',
            backgroundColor: '#91CAFF',
            borderRadius: 20,
            marginLeft: 5,
            marginVertical: 2,
            borderWidth: 1,
        },

        ratingContainer1: {
            height: 110,
            width: '97%',
            backgroundColor: '#91CAFF',
            borderRadius: 20,
            marginLeft: 5,
            marginVertical: 2,
        },

        rateName: {
            fontSize: 18,
            fontWeight: '400',
            marginLeft: 25,
        },

        rateDescription: {
            fontSize: 15,
            fontWeight: '200',
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
        },

        rateImg: {
            height: 100,
            width: 100,
            marginTop: 10,
            marginLeft: 25,
            borderRadius: 7,
        },

    });
}