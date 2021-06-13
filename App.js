import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import CoinItem from './components/CoinItem'

const App = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [refresh, setrefresh] = useState(false)

  const loadData = async() => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json()
      setCoins(data)
    } catch(err) {
      console.error(err)
    }
    
  }

  useEffect(() => {
    loadData()
  }, [])

  const refreshData = async() => {
      setRefresh(true)
      await loadData()
      setRefresh(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414"/>
        <View style={styles.header}>
          <Text style={styles.title}>
            Kencoin
          </Text>
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor= "#fff"
            onChangeText={(e) => setSearch(e.toLocaleLowerCase()) }
          />
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
  },
  title: {
    color: '#fff',
    marginTop: 10,
    fontSize: 30,
  },
  list: {
    width: '90%'
  },
  header: {
    flexDirection:'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 10,
  },
  searchInput: {
    color: '#fff',
    borderBottomColor: '#4657ce',
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'center',
  }
})

export default App
