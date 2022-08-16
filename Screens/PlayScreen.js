import { StyleSheet, Text, View,Image, ImageBackground,  } from 'react-native'
import React from 'react'
import Spin from '../Spin'
import { useNavigation } from '@react-navigation/native'

const PlayScreen = () => {
  
  const navigation = useNavigation()

  return (
    <View style={{flex:1}}>
        <ImageBackground source={require('../assets/back.png')} resizeMode={'cover'} blurRadius={20} style={{flex:1, width:'100%',height:'100%'}}>
          <View style={styles.container}>
            
            <View style={{justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
              <Text style={styles.title}>LA ROUE DU BONHEUR</Text>
              <Text style={styles.description}>Faites tourner la roue quotidiennement et tentez de gagner de nombreux lots</Text>
            </View>
          <Spin navigation={navigation}/>
            
          </View>
        </ImageBackground>
    </View>
  )
}

export default PlayScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'column', 
    paddingTop:'2%',
    paddingBottom:'15%',
    //backgroundColor:'#000'
    
  },
  title:{
      color:'#ffd843',
      fontSize:30,
      fontWeight:'700'
      
  },
  description:{
    color:'#fff',
    fontSize:12,
    letterSpacing:2,
    textAlign:'center'
},
secondDescription:{
  color:'#fff',
  fontSize:18,
  marginTop:10
}
})