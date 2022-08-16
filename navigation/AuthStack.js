import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react'


import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import PlayScreen from '../Screens/PlayScreen';




const Stack = createNativeStackNavigator();
function AuthStack() {
    
    return (
       
            
            <Stack.Navigator  >
                
                <Stack.Screen 
                  name="Login" 
                  component={LoginScreen} 
                  options={{
                    headerShown:false
                  }}
                />
                
            </Stack.Navigator>

    )
}


export default AuthStack