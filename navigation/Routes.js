import React,{useContext, useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
//import AppStack from './AppStack';
import { AuthContext } from './AuthProvider';
import { Text, View,ActivityIndicator } from 'react-native';
import AuthStack from './AuthStack';
import HomeScreen from '../Screens/HomeScreen';
import AppStack from './AppStack';
import SplashScreen from '../components/SplashScreen';

const Routes = () => {

    const {user, setUser, loading,setLoading } = useContext(AuthContext);
    console.log(user);
    if(loading) {
        return (
            <SplashScreen  setLoading={setLoading}/>
        )
    }
    return (
        <NavigationContainer >

            {user ? <AppStack/> : <AuthStack /> } 
            
        </NavigationContainer>
    )
}

export default Routes