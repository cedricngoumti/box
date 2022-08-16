import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { COLORS } from '../utils/Colors'
import { windowHeight, windowWidth } from '../utils/Dimensions'
import { CheckProduct } from '../utils/API';



const ResultCodeBarScreen = (props) => {
  const [isLoading, setIsLoading]=useState(true)
  const {codebar} = props.route.params
    const {navigation} = props

  useEffect(() => {
    
    CheckProduct(codebar.data, codebar.target,codebar.type,'1').then(e=>{
      console.log(e)
      setIsLoading(false)
    }).catch(e=>console.log(e))
    
  }, [])
  
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.primary}/>
      ):(
        <View>
          <View style={styles.modalContainer}>
                  <View style={{alignItems:'center', justifyContent:'center'}} >
                    <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                      Petite Guinness authentique 
                    </Text>
                    <Image 
                        source={require('../assets/guinness.png')}
                        style={{ width: 200, height:200
                        }}
                        resizeMode={'cover'}
                    /> 
                    <Text style={styles.description}> Appuyez sur "Ok, j'ai compris" Pour Vérifier à nouveau un produit GUINNESS ou pour fermer le scanner </Text>
                  </View>
                  <TouchableOpacity activeOpacity={90} style={{
                          backgroundColor:'#ffd843',
                          padding:10,
                          borderRadius:50,
                          alignItems:'center',
                          justifyContent:'center',
                          width:300
                   }} onPress={()=> navigation.goBack()}>
                      <Text style={{color:'#000',fontWeight:'700'}}>Ok, j'ai compris</Text>
                      
                  </TouchableOpacity>
              </View>        
        </View>
      )} 
    </View>
  )
}

export default ResultCodeBarScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f2f2f2'
    },
    modalContainer:{
      height:windowHeight, 
      //backgroundColor:'#ff0',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
       
    },
    btnOk:{
      width:windowWidth*0.8,
      backgroundColor:'#ff0'
    },
    startButtonView: {
      position: 'absolute',
    },
    startButton: {
      backgroundColor: 'rgba(0,0,0,.5)',
      marginTop: 50,
      padding: 5,
    },
    startButtonText: {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold',
    },
    winnerView: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tryAgainButton: {
      padding: 10,
    },
    winnerText: {
      fontSize: 30,
    },
    tryAgainButton: {
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    tryAgainText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    description:{
      color:'#000',
      fontSize:14,
      letterSpacing:2,
      textAlign:'center',
      padding:5,
      paddingBottom:20
    },
})