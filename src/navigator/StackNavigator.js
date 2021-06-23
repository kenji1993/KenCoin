import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Exchanges from '../screens/Exchanges'

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"  component={{Home}}/>
            <Stack.Screen name="Exchanges" component={{Exchanges}}/>
        </Stack.Navigator>
    )
}

