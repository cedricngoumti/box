import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react'
import AddCodeBarScreen from '../Screens/AddCodeBarScreen';
import CodeBarScreen from '../Screens/CodeBarScreen';
import DashboardScreen from '../Screens/DashboardScreen';

import HomeScreen from '../Screens/HomeScreen';
import MonteeScreen from '../Screens/MonteeScreen';
import PlayScreen from '../Screens/PlayScreen';
import ResultAddCodeBarScreen from '../Screens/ResultAddCodeBarScreen';
import ResultCodeBarScreen from '../Screens/ResultCodeBarScreen';




const Stack = createNativeStackNavigator();
function AppStack() {
    
    return (
       
            
            <Stack.Navigator  >
                <Stack.Screen 
                  name="Dashboard" 
                  component={DashboardScreen} 
                  options={{
                    headerShown:false
                  }}
                />

                <Stack.Screen 
                  name="Play" 
                  component={PlayScreen} 
                  options={{
                    headerShown:false
                  }}
                />

                <Stack.Screen 
                  name="CodeBar" 
                  component={CodeBarScreen} 
                  options={{
                    headerShown:false
                  }}
                />

                <Stack.Screen 
                  name="Montee" 
                  component={MonteeScreen} 
                  options={{
                    headerShown:false
                  }}
                />

                <Stack.Screen 
                  name="AddCodeBar" 
                  component={AddCodeBarScreen} 
                  options={{
                    headerShown:false
                  }}
                />

                <Stack.Screen 
                  name="ResultCodeBar" 
                  component={ResultCodeBarScreen} 
                  options={{
                    headerShown:false
                  }}
                />
                <Stack.Screen 
                  name="ResultAddCodeBar" 
                  component={ResultAddCodeBarScreen} 
                  options={{
                    headerShown:false
                  }}
                />
                
                <Stack.Screen 
                  name="Home" 
                  component={HomeScreen} 
                  options={{
                    headerShown:false
                  }}
                />
                
            </Stack.Navigator>

    )
}


export default AppStack