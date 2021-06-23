import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'


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


export default CoinItem
