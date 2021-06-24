import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import kencoinLogo1 from '../../assets/images/kencoinLogo1.png'
import styles from './styles'

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


export default TitleBar
