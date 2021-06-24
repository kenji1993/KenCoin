import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'

const ExchangeItem = ({exchange}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.exchangeName}>
                <Image
                    style={styles.image}
                    source={{uri: exchange.image}}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.text}>
                        {exchange.name}
                    </Text>
                    <Text style={styles.symbol}>
                        {exchange.country}
                    </Text>
                </View>
                
            </View>
            <View>
                <View  style={{
                alignItems: "flex-end"
            }}>
                    <Text style={{color: "#4657ce"}}>
                       Volumen(BTC) 24hs
                    </Text>
                </View>
                <View style={styles.nameContainer}>
                     <Text style={styles.text}>
                        {exchange.trade_volume_24h_btc}
                     </Text>
                </View>
            </View>
               
            
        </View>
    )
}

export default ExchangeItem
