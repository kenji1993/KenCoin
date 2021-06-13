import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


const CoinItem = ({coin}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinName}>
                <Image
                    style={styles.image}
                    source={{uri: coin.image}}
                />
               <View style={styles.nameContainer}>
                    <Text style={styles.text}>
                        {coin.name}
                    </Text>
                    <Text style={styles.symbol}>
                        {coin.symbol}
                    </Text>
               </View>
            </View>
           <View>
            <Text style={styles.textPrice}>
                ${coin.current_price}
            </Text>
            <Text style={[styles.pricePercentage, 
                        coin.price_change_percentage_24h > 0 ? styles.proPrice : styles.defPrice ]}>
                {coin.price_change_percentage_24h}%
            </Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
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

export default CoinItem
