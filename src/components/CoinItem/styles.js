import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#050505'
    },
    coinName: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
    },
    symbol: {
        color: '#434343',
        textTransform: 'uppercase',
    },
    image: {
        width: 30,
        height: 30
    },
    nameContainer: {
        marginLeft: 10,
    },
    textPrice: {
        color: '#fff',
        textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right'
    },
    proPrice: {
        color: '#00b5b9'
    },
    defPrice: {
        color: '#fc4422'
    }
})

export default styles