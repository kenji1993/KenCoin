import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Exchanges from '../screens/Exchanges'
import Home from '../screens/Home'

const Drawer = createDrawerNavigator()

const Sidebar = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
             backgroundColor: "#000"   
            }}
        >
            <Drawer.Screen name="Home"  component={Home}/>
            <Drawer.Screen name="Exchanges" component={Exchanges}/>
        </Drawer.Navigator>
    )
}

export default Sidebar
