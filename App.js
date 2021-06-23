import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Sidebar from './src/navigator/Sidebar'


const App = () => {
  return (
    <NavigationContainer>
      <Sidebar/>
    </NavigationContainer>
  )
}



export default App
