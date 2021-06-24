import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, Image, FlatList, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import CoinItem from '../components/CoinItem/CoinItem'
import TitleBar from '../components/TitleBar/TitleBar'
import hamburguerMenu from '../assets/images/hamburguerMenu.png'
import { DrawerActions } from '@react-navigation/native'

const Home = ({navigation}) => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [refresh, setRefresh] = useState(false)

    const loadData = async() => {
        try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        const data = await res.json()
        setCoins(data)
        } catch(err) {
        console.error(err)
        throw err
        }
        
    }

    useEffect(async() => {
        await loadData()
    }, [])

    const refreshData = async() => {
        setRefresh(true)
        await loadData()
        setRefresh(false)
    }

    return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000"/>
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
                style={{
                  position: "absolute",
                  zIndex: 1,
                  left: 6,
                  top: 6,
                }}>
              <Image 
                source={hamburguerMenu}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
        <TitleBar/>
        <View style={styles.searchBar}>
          <TextInput 
              style={styles.searchInput}
              placeholder="Buscar"
              value={search}
              placeholderTextColor= "#fff"
              onChangeText={(e) => setSearch(e.toLowerCase()) }
            />
          <TouchableOpacity
              onPress={() => setSearch('')}
              style={styles.cleanOpacity}
          >
            <Text
                style={styles.clean}
              >x</Text>
          </TouchableOpacity>
            
        </View>
        <FlatList
          style={styles.list}
          data={
            coins.filter(coin => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search))
          }
          renderItem={({item}) => {
            return <CoinItem coin={item}/>
          }}
          showsVerticalScrollIndicator={false}
          refreshing={refresh}
          onRefresh={refreshData}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#141414',
      alignItems: 'center',
      flex: 1,
      borderBottomWidth: 2,
    },
    list: {
      width: '90%',
    },
    searchBar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10
    },  
    searchInput: {
      color: '#fff',
      borderBottomColor: '#4657ce',
      borderBottomWidth: 2,
      width: '40%',
      textAlign: 'center',
    },
    clean: {
      color: '#fff',
      fontSize: 25,
    },
    cleanOpacity: {
      width: 30,
      height: 30,
      alignSelf: 'center',
    }
  })

export default Home
