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
    exchangeName: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
    },
    symbol: {
        color: '#434343',
    },
    image: {
        width: 30,
        height: 30
    },
    nameContainer: {
        marginLeft: 10,
    }
})

export default styles