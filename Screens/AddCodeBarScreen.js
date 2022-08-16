import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState,useRef } from 'react'
import { RNCamera } from 'react-native-camera';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import { COLORS } from '../utils/Colors';
import { AddProduitGuinness } from '../utils/API';

const AddCodeBarScreen = ({navigation}) => {
    const [torchMode,setTorchMode]=useState ('off')
    const [cameraType,setCameraType]=useState ('back')
    const camera = useRef(null)
    
   

  return (
    <View style={styles.container}>
        
        
        <View style={styles.main}>
                <View style={{width:windowWidth,zIndex:2,backgroundColor:'#f2f2f2', alignContent:'center',alignSelf:'flex-start', alignItems:'center',paddingBottom:windowHeight*0.03}}>
                    <Image
                    source={require('../assets/logo.png')}
                    resizeMode='cover'
                    style={{
                        width:200,
                        height:windowHeight*0.12
                    }}
                    
                />

                </View>
                <View style={{paddingBottom:10,zIndex:2,backgroundColor:'#f2f2f2',width:windowWidth}}>
                    <Text style={styles.text}>Ajouter un produit guinness en scannant, </Text> 
                    
                </View>
                
                <View  style={{backgroundColor:'black',width:windowWidth*0.9, height:windowHeight*0.4, justifyContent:'center',alignItems:'center',borderColor:COLORS.primary,borderWidth:1}}>
                        <RNCamera
                        ref={camera}
                        resizeMode={'cover'}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={(e) => navigation.navigate('ResultAddCodeBar',{
                            codebar:e,
                        })
                    }  
                    >
                
                
                </RNCamera>

                
                </View>
            <View style={{zIndex:2,backgroundColor:'#f2f2f2',width:windowWidth}}>
            <Text style={styles.slogan}>Vérifiez le produit Guiness que vous consommez en scannant le code bar present sur l'étiquette du produit!</Text>
            </View>            
            
                  
            
        </View>
        
      
    </View>
  )
}

export default AddCodeBarScreen

const styles = StyleSheet.create({
    container: {
        //paddingTop:windowHeight*0.05,
        flex: 1,
        //flexDirection: 'column',
        //backgroundColor: 'black',
    },
    preview: {
        borderRadius: 5,
        height:windowHeight*0.4,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderColor:COLORS.primary,
        borderWidth:1
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    main:{
        flex:1,
        padding:20,
        //paddingTop:2,
        //paddingTop:windowHeight*0.25,
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'flex-end'
    },
    header:{
        
        flexDirection:'row',
        width:'100%',
        alignItems:'flex-start'
    
    },
    text:{
        width:'100%',
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 10,
        color: COLORS.primary,
        textAlign:'left'
    },
    slogan:{
        width:'90%',
        fontSize:16,
        marginTop:20,
        marginBottom: 20,
        textAlign:'center',
    },
    logo:{
        height: 100,
        width: 100,
        resizeMode: 'cover',
        alignSelf:'center'
    },
    navButton: {
        marginTop: 15,
      },
    forgotButton: {
        marginVertical: 35,
        textAlign:'center',
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.primary,
       
      },
      notice:{
        width:'100%',
        fontSize:13,
        color:COLORS.gray,
        marginTop:20,
        
        textAlign:'center',
    },
})