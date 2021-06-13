import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import kencoinLogo1 from '../../src/assets/images/kencoinLogo1.png'

const TitleBar = () => {
    return (
        <View style={styles.header}>
          <Image 
            source={kencoinLogo1}
            style={styles.logo}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5,
      },
    title: {
        color: '#fff',
        marginTop: 10,
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'Roboto',
    },
    logo: {
      width: '100%',
      height: 150,
    }
})

export default TitleBar
