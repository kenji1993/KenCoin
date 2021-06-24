import React,{useState, useEffect} from 'react'
import {View, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import ExchangeItem from '../components/ExchangeItem/ExchangeItem'
import hamburguerMenu from '../assets/images/hamburguerMenu.png'
import { DrawerActions } from '@react-navigation/native'


const Exchanges = ({navigation}) => {

    const [exchanges, setExchanges] = useState([])
    const [search, setSearch] = useState('')
    const [refresh, setRefresh] = useState(false)


    const loadData = async () => {
        try {
            const res = await fetch('https://api.coingecko.com/api/v3/exchanges')
            const data = await res.json()
            setExchanges(data)
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    useEffect(async () => {
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
                }}
            >
                <Image
                    source={hamburguerMenu}
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />
            </TouchableOpacity>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                    value={search}
                    placeholderTextColor="#fff"
                    onChangeText={(e) => setSearch(e.toLowerCase())}
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
                    exchanges.filter(exchange => exchange.name.toLowerCase().includes(search))
                }
                renderItem={({item}) => {
                    return <ExchangeItem exchange={item}/>
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

export default Exchanges
